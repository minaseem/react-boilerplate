/**
 * Created by imamudinnaseem on 5/22/17.
 */

var express = require('express');
var R = require('ramda');
var path = require('path');
var config = require('config');
var app = express();
var proxy = require('express-http-proxy');

var gzipReq = function (type, req, res, next) {
    req.url = req.url + '.gz'
    res.set('Content-Encoding', 'gzip')
    res.set('Content-Type', type)
    res.set('Cache-Control', 'public, max-age=31536000')
    next()
}
app.get('*.js', R.curry(gzipReq)('application/javascript'))
app.get('*.css', R.curry(gzipReq)('text/css'))

app.use('/api', proxy('localhost:7181'))

app.use('/', express.static(path.resolve(__dirname, 'dist')))
app.listen(config.port)
console.log('listening to port ' + config.port)