const http = require("http");

const port = Number(process.env.PORT || 4100);
const host = process.env.HOST || "0.0.0.0";

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(
    `${JSON.stringify({
      ok: true,
      service: "admin.chuckfresco.com",
      message: "Admin app placeholder"
    })}\n`
  );
});

server.listen(port, host, () => {
  console.log(`Admin app placeholder listening on http://${host}:${port}`);
});
