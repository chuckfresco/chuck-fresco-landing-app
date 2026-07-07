const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function setupProxy(app) {
  app.use(
    "/youtube-api",
    createProxyMiddleware({
      target: "https://www.googleapis.com",
      changeOrigin: true,
      pathRewrite: {
        "^/youtube-api": "/youtube"
      },
      headers: {
        referer: "https://chuckfresco.com/"
      }
    })
  );

  app.use(
    "/v1/infiniportal",
    createProxyMiddleware({
      target: "https://pixels-server.pixels.xyz",
      changeOrigin: true
    })
  );
};
