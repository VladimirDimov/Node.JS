var express = require('express');

var env = process.env.NODE_ENV || 'development';

var app = express();
var config = require('./server/config/config')[env];

require('./server/config/express')(app, config);
require('./server/config/mongoose')(config);
require('./server/config/passport')(config);
require('./server/config/routers/routes-loader')(app);

// Handle 404
app.use(function (req, res) {
    res.send('404: Page not Found', 404);
});
  
// Handle 500
app.use(function (error, req, res, next) {
    res.send('500: Internal Server Error', 500);
});

app.listen(config.port);

console.log("Server running on port: " + config.port);