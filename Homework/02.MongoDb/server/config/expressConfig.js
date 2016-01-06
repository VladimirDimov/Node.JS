var express = require('express'),
    morgan = require('morgan'),
    bodyParser = require('body-parser');

module.exports = function (app) {
    app.set('view engine', 'jade');
    app.set('views', './views');

    app.use(morgan('dev'));
    // parse application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({ extended: false }));
    // parse application/json
    app.use(bodyParser.json());
};