var port = 3001;
var express = require('express');
var mongoose = require('mongoose');

require('./config/mongooseConfig')(mongoose);

var app = express();
// Configure express
require('./config/express')(app);
// Configure routes
require('./config/routesConfig')(app);
require('./config/passportConfig')();
app.listen(port, function () {
    console.log('Server is listening on port %s', port);
});