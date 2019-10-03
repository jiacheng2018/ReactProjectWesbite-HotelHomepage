const proxy = require('http-proxy-middleware');
//Proxy the loacalhost to port 5000
module.exports = function(app) {
    app.use(proxy('/auth/google', { target: 'http://localhost:5000' }));
    //any requests whatsover
    app.use(proxy('/api/**', { target: 'http://localhost:5000' }));
};