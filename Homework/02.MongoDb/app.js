var express = require('express');
const port = 3000;

var app = express();
require('./config/expressConfig')(app);
require('./config/routesConfig')(app);
require('./config/mongooseConfig')();
app.listen(port, function () {
    console.log('Server listening on port: %s', port);
});