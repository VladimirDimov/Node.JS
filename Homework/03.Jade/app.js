const port = 3000;

var express = require('express');

var app = express();
require('./config/express')(app);
require('./config/routes')(app);
app.listen(port, function () {
    console.log('Server is listening on port ' + port);
});