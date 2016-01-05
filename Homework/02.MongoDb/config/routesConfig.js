var express = require('express'),
    controllers = require('../controllers');

module.exports = function (app) {
    app.get('/', function (req, res) {
        res.redirect('/home');
    });

    app.get('/home', controllers.home.get);

    app.get('/register', controllers.register.get);
    app.post('/register', controllers.register.post);
    app.get('/login', controllers.login.get);
    app.post('/login', controllers.login.post);

    app.get('/messages', controllers.messages.get);
    app.post('/messages', controllers.messages.send);
}