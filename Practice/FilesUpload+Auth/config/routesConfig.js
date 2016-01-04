var express = require('express');
var controllers = require('../controllers');
var passport = require('passport');

module.exports = function (app) {
    app.get('/', controllers.home.get);
    
    //users
    app.get('/users', passport.authenticate('bearer', { session: false }), controllers.auth.getAllUsers);
    app.post('/register', controllers.auth.register);
    app.post('/login', controllers.auth.login);
    
    //files
    app.get('/files', controllers.files.get);
    app.post('/files/upload', controllers.files.upload);
};