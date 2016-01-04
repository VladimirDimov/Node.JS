var express = require('express'),
    controllers = require('../controllers');

module.exports = function (app) {
    app.get('/home', controllers.home.get);

    app.get('/register', controllers.register.get);
    app.post('/register', controllers.register.post);
}