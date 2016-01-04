var express = require('express');
const port = 3000;

// It's important to config mongo outside the loop !!!
require('./config/mongooseConfig')();

var app = express();
require('./config/expressConfig')(app);
require('./config/routesConfig')(app);
app.listen(port, function () {
    console.log('Server listening on port: %s', port);
});