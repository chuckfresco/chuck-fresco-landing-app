const http = require("http");

const port = Number(process.env.PORT || 4000);
const host = process.env.HOST || "0.0.0.0";

const sendJson = (res, statusCode, payload) => {
  res.writeHead(statusCode, {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": process.env.CORS_ORIGIN || "*",
    "Access-Control-Allow-Methods": "GET,OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type"
  });
  res.end(`${JSON.stringify(payload)}\n`);
};

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host || "localhost"}`);

  if (req.method === "OPTIONS") {
    res.writeHead(204, {
      "Access-Control-Allow-Origin": process.env.CORS_ORIGIN || "*",
      "Access-Control-Allow-Methods": "GET,OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type"
    });
    res.end();
    return;
  }

  if (req.method === "GET" && (url.pathname === "/" || url.pathname === "/health" || url.pathname === "/api/health")) {
    sendJson(res, 200, {
      ok: true,
      service: "api.chuckfreso.com",
      timestamp: new Date().toISOString()
    });
    return;
  }

  sendJson(res, 404, {
    ok: false,
    error: "Not found"
  });
});

server.listen(port, host, () => {
  console.log(`API listening on http://${host}:${port}`);
});
