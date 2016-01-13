var express = require('express');

var env = process.env.NODE_ENV || 'development';

var app = express();
var config = require('./server/config/config')[env];

require('./server/config/express')(app, config);
require('./server/config/mongoose')(config);
require('./server/config/passport')(config);
require('./server/config/routers/routes-loader')(app);

var http = require('http').Server(app);
var io = require('./server/config/socketio').listen(http);

http.listen(config.port);

console.log("Server running on port: " + config.port);