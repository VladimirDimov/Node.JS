var express = require('express'),
    controllers = require('../controllers'),
    passport = require('passport');
    require('passport-http-bearer').Strategy;

module.exports = function (app) {
    app.get('/', function (req, res) {
        res.redirect('/home');
    });

    app.get('/home', controllers.home.get);

    app.get('/register', controllers.register.get);
    app.post('/register', controllers.register.post);
    app.get('/login', controllers.login.get);
    app.post('/login', controllers.login.post);

    app.get('/messages', passport.authenticate('bearer', { session: false }), controllers.messages.get);
    app.post('/messages', passport.authenticate('bearer', { session: false }), controllers.messages.send);
    app.get('/messages/byUser', passport.authenticate('bearer', { session: false }), controllers.messages.getByUser);
}