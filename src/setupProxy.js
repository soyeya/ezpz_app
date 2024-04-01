const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app){

     app.use(
        createProxyMiddleware("/subwayApi"),{
            target : "http://localhost:4000",
            changeOrigin: true,
        }
     )
}