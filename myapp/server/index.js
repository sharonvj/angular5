var http       = require('http');
var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json({limit: '50mb'}));
app.use('/api/account',require('./api/account.js'));

var httpServer = http.createServer(app);
httpServer.listen(8080);