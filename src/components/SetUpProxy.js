const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
 app.use(
   createProxyMiddleware("/api/v1", {
     target: "https://localhost:3000",
     changeOrigin: true,
   })
);
};