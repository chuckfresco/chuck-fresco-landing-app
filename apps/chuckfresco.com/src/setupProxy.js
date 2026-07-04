const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function setupProxy(app) {
  app.use(
    "/v1/infiniportal",
    createProxyMiddleware({
      target: "https://pixels-server.pixels.xyz",
      changeOrigin: true
    })
  );
};
