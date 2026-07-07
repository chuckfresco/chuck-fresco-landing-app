const crypto = require("crypto");
const fs = require("fs");
const http = require("http");
const path = require("path");

const loadEnvFile = () => {
  const envPath = path.resolve(__dirname, "..", ".env");
  if (!fs.existsSync(envPath)) {
    return;
  }

  const lines = fs.readFileSync(envPath, "utf8").split(/\r?\n/);
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) {
      continue;
    }

    const separatorIndex = trimmed.indexOf("=");
    if (separatorIndex === -1) {
      continue;
    }

    const key = trimmed.slice(0, separatorIndex).trim();
    const value = trimmed.slice(separatorIndex + 1).trim().replace(/^["']|["']$/g, "");
    if (key && process.env[key] === undefined) {
      process.env[key] = value;
    }
  }
};

loadEnvFile();

const port = Number(process.env.PORT || 4100);
const host = process.env.HOST || "0.0.0.0";
const appRoot = path.resolve(__dirname, "starter", "build");
const nodeEnv = process.env.NODE_ENV || "development";

const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".webp": "image/webp"
};

const corsHeaders = {
  "Access-Control-Allow-Origin": process.env.CORS_ORIGIN || "*",
  "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type,Authorization"
};

const sendJson = (res, statusCode, payload) => {
  res.writeHead(statusCode, {
    ...corsHeaders,
    "Content-Type": "application/json; charset=utf-8"
  });
  res.end(`${JSON.stringify(payload)}\n`);
};

const readJsonBody = (req) =>
  new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
      if (body.length > 16 * 1024) {
        reject(new Error("Request body is too large"));
        req.destroy();
      }
    });
    req.on("end", () => {
      if (!body) {
        resolve({});
        return;
      }
      try {
        resolve(JSON.parse(body));
      } catch (error) {
        reject(error);
      }
    });
  });

const base64Url = (input) =>
  Buffer.from(input)
    .toString("base64")
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");

const base64UrlDecode = (input) => {
  const normalized = input.replace(/-/g, "+").replace(/_/g, "/");
  return Buffer.from(normalized.padEnd(Math.ceil(normalized.length / 4) * 4, "="), "base64");
};

const signToken = (payload) => {
  const secret = process.env.ADMIN_TOKEN_SECRET;
  if (!secret && nodeEnv === "production") {
    throw new Error("ADMIN_TOKEN_SECRET is required in production");
  }

  const header = base64Url(JSON.stringify({ alg: "HS256", typ: "JWT" }));
  const body = base64Url(
    JSON.stringify({
      ...payload,
      iss: "admin.chuckfresco.com",
      aud: "chuckfresco-admin-api",
      iat: Math.floor(Date.now() / 1000),
      exp: Math.floor(Date.now() / 1000) + 60 * 60
    })
  );
  const signature = crypto
    .createHmac("sha256", secret || "local-admin-token-secret")
    .update(`${header}.${body}`)
    .digest("base64")
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");

  return `${header}.${body}.${signature}`;
};

const shouldRequireAwsLogin = () => {
  if (process.env.ADMIN_REQUIRE_AWS_LOGIN) {
    return process.env.ADMIN_REQUIRE_AWS_LOGIN === "true";
  }

  return nodeEnv === "production";
};

const getAwsLoginUrl = (requestUrl) => {
  if (process.env.ADMIN_AWS_LOGIN_URL) {
    return process.env.ADMIN_AWS_LOGIN_URL;
  }

  const domain = process.env.ADMIN_COGNITO_DOMAIN;
  const clientId = process.env.ADMIN_COGNITO_CLIENT_ID;
  const redirectUri =
    process.env.ADMIN_COGNITO_REDIRECT_URI ||
    `${requestUrl.origin}/sign-in`;

  if (!domain || !clientId) {
    return null;
  }

  const loginUrl = new URL("/oauth2/authorize", domain);
  loginUrl.searchParams.set("client_id", clientId);
  loginUrl.searchParams.set("response_type", "code");
  loginUrl.searchParams.set("scope", process.env.ADMIN_COGNITO_SCOPE || "openid email profile");
  loginUrl.searchParams.set("redirect_uri", redirectUri);
  loginUrl.searchParams.set("state", crypto.randomBytes(16).toString("hex"));

  return loginUrl.toString();
};

const exchangeCognitoCode = async (code, requestUrl) => {
  const domain = process.env.ADMIN_COGNITO_DOMAIN;
  const clientId = process.env.ADMIN_COGNITO_CLIENT_ID;
  const clientSecret = process.env.ADMIN_COGNITO_CLIENT_SECRET;
  const redirectUri =
    process.env.ADMIN_COGNITO_REDIRECT_URI ||
    `${requestUrl.origin}/sign-in`;

  if (!domain || !clientId || !code) {
    return null;
  }

  const tokenUrl = new URL("/oauth2/token", domain);
  const form = new URLSearchParams({
    grant_type: "authorization_code",
    client_id: clientId,
    code,
    redirect_uri: redirectUri
  });

  const headers = {
    "Content-Type": "application/x-www-form-urlencoded"
  };

  if (clientSecret) {
    headers.Authorization = `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString("base64")}`;
  }

  const response = await fetch(tokenUrl, {
    method: "POST",
    headers,
    body: form
  });

  if (!response.ok) {
    let message = "AWS login code exchange failed.";
    try {
      const errorBody = await response.json();
      if (errorBody.error === "invalid_client") {
        message = "AWS rejected the app client. Check ADMIN_COGNITO_CLIENT_SECRET.";
      } else if (errorBody.error_description) {
        message = `AWS login failed: ${errorBody.error_description}`;
      }
    } catch (error) {
      // Keep the generic message if Cognito does not return a JSON error.
    }
    throw new Error(message);
  }

  return response.json();
};

let cognitoJwksCache = null;

const getCognitoIssuer = () => {
  if (process.env.ADMIN_COGNITO_ISSUER) {
    return process.env.ADMIN_COGNITO_ISSUER.replace(/\/$/, "");
  }

  const userPoolId = process.env.ADMIN_COGNITO_USER_POOL_ID;
  if (!userPoolId) {
    return null;
  }

  const region = userPoolId.split("_")[0];
  return `https://cognito-idp.${region}.amazonaws.com/${userPoolId}`;
};

const getCognitoJwks = async (issuer) => {
  if (cognitoJwksCache?.issuer === issuer) {
    return cognitoJwksCache.keys;
  }

  const response = await fetch(`${issuer}/.well-known/jwks.json`);
  if (!response.ok) {
    throw new Error("Unable to load Cognito signing keys.");
  }

  const jwks = await response.json();
  cognitoJwksCache = {
    issuer,
    keys: jwks.keys || []
  };
  return cognitoJwksCache.keys;
};

const decodeJwtPart = (token, index) => {
  const part = token.split(".")[index];
  if (!part) {
    throw new Error("Invalid Cognito token.");
  }

  return JSON.parse(base64UrlDecode(part).toString("utf8"));
};

const verifyCognitoIdToken = async (idToken) => {
  const issuer = getCognitoIssuer();
  const clientId = process.env.ADMIN_COGNITO_CLIENT_ID;

  if (!issuer || !clientId) {
    throw new Error("Cognito issuer and client ID are required for admin login.");
  }

  const [headerPart, payloadPart, signaturePart] = idToken.split(".");
  if (!headerPart || !payloadPart || !signaturePart) {
    throw new Error("Invalid Cognito token.");
  }

  const header = decodeJwtPart(idToken, 0);
  const claims = decodeJwtPart(idToken, 1);
  if (header.alg !== "RS256" || !header.kid) {
    throw new Error("Unsupported Cognito token signing algorithm.");
  }

  const keys = await getCognitoJwks(issuer);
  const jwk = keys.find((key) => key.kid === header.kid);
  if (!jwk) {
    cognitoJwksCache = null;
    throw new Error("Cognito signing key was not found.");
  }

  const verifier = crypto.createVerify("RSA-SHA256");
  verifier.update(`${headerPart}.${payloadPart}`);
  verifier.end();

  const validSignature = verifier.verify(
    crypto.createPublicKey({ key: jwk, format: "jwk" }),
    base64UrlDecode(signaturePart)
  );
  if (!validSignature) {
    throw new Error("Invalid Cognito token signature.");
  }

  const now = Math.floor(Date.now() / 1000);
  if (claims.iss !== issuer) {
    throw new Error("Cognito token was issued by the wrong user pool.");
  }
  if (claims.aud !== clientId) {
    throw new Error("Cognito token was issued for the wrong app client.");
  }
  if (claims.token_use !== "id") {
    throw new Error("Cognito token is not an ID token.");
  }
  if (claims.exp <= now) {
    throw new Error("Cognito token has expired.");
  }

  return claims;
};

const requireCognitoAdmin = async (awsSession) => {
  if (!awsSession?.id_token) {
    throw new Error("Cognito did not return an ID token.");
  }

  const claims = await verifyCognitoIdToken(awsSession.id_token);
  const adminGroup = process.env.ADMIN_COGNITO_ADMIN_GROUP || "admin";
  const groups = Array.isArray(claims["cognito:groups"]) ? claims["cognito:groups"] : [];

  if (!groups.includes(adminGroup)) {
    throw new Error(`Your Cognito user must be in the ${adminGroup} group.`);
  }

  return claims;
};

const sendAdminToken = (res, claims = {}, awsLogin = false) => {
  const email = claims.email || process.env.ADMIN_USER_EMAIL || "";
  const userName = claims.name || claims["cognito:username"] || email || "Chuck Fresco Admin";
  const token = signToken({
    sub: claims.sub || userName,
    scope: "admin:api",
    email,
    awsLogin
  });

  sendJson(res, 200, {
    token,
    user: {
      userName,
      authority: ["admin"],
      avatar: "",
      email
    }
  });
};

const handleSignIn = async (req, res, requestUrl) => {
  const body = await readJsonBody(req);

  if (body.awsCode) {
    const awsSession = await exchangeCognitoCode(String(body.awsCode), requestUrl);
    const claims = await requireCognitoAdmin(awsSession);
    sendAdminToken(res, claims, true);
    return;
  }

  sendJson(res, 401, { message: "AWS Cognito login is required." });
};

const serveStatic = (req, res, requestUrl) => {
  let pathname = decodeURIComponent(requestUrl.pathname);
  if (pathname === "/") {
    pathname = "/index.html";
  }

  const filePath = path.resolve(appRoot, `.${pathname}`);
  const safePath = filePath.startsWith(appRoot) ? filePath : path.join(appRoot, "index.html");
  const targetPath = fs.existsSync(safePath) && fs.statSync(safePath).isFile()
    ? safePath
    : path.join(appRoot, "index.html");

  if (!fs.existsSync(targetPath)) {
    sendJson(res, 503, {
      ok: false,
      service: "admin.chuckfresco.com",
      message: "Admin UI has not been built yet. Run npm run build in apps/admin.chuckfresco.com."
    });
    return;
  }

  res.writeHead(200, {
    "Content-Type": contentTypes[path.extname(targetPath)] || "application/octet-stream",
    "Cache-Control": targetPath.endsWith("index.html")
      ? "no-cache"
      : "public, max-age=31536000, immutable"
  });
  fs.createReadStream(targetPath).pipe(res);
};

const server = http.createServer(async (req, res) => {
  const requestUrl = new URL(req.url, `http://${req.headers.host || "localhost"}`);

  if (req.method === "OPTIONS") {
    res.writeHead(204, corsHeaders);
    res.end();
    return;
  }

  try {
    if (req.method === "GET" && ["/api/health", "/health"].includes(requestUrl.pathname)) {
      sendJson(res, 200, {
        ok: true,
        service: "admin.chuckfresco.com",
        awsLoginRequired: shouldRequireAwsLogin(),
        timestamp: new Date().toISOString()
      });
      return;
    }

    if (req.method === "GET" && requestUrl.pathname === "/api/auth/aws/login") {
      const loginUrl = getAwsLoginUrl(requestUrl);
      sendJson(res, 200, {
        configured: Boolean(loginUrl),
        required: shouldRequireAwsLogin(),
        loginUrl
      });
      return;
    }

    if (req.method === "POST" && requestUrl.pathname === "/api/sign-in") {
      await handleSignIn(req, res, requestUrl);
      return;
    }

    if (req.method === "POST" && requestUrl.pathname === "/api/sign-out") {
      sendJson(res, 200, { ok: true });
      return;
    }

    if (requestUrl.pathname.startsWith("/api/")) {
      sendJson(res, 404, { message: "Not found" });
      return;
    }

    serveStatic(req, res, requestUrl);
  } catch (error) {
    sendJson(res, 500, {
      message: error.message || "Unexpected admin server error"
    });
  }
});

server.listen(port, host, () => {
  console.log(`Admin app listening on http://${host}:${port}`);
});
