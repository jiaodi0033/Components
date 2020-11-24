const proxy = require('http-proxy-middleware');

module.exports = app => {
    app.use(
        '/api',
        proxy.createProxyMiddleware({
            target: 'http://localhost:8888/',
            changeOrigin: true,
        })
    );
};