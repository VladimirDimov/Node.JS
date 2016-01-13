var router = require('express').Router(),
    usersController = require('../../controllers').users,
    auth = require('../auth');

router
    .get('/register', usersController.getRegister)
    .post('/register', usersController.postRegister)
    .get('/login', usersController.getLogin)
    .post('/login', auth.login)
    .get('/logout', auth.logout)
    .get('/profile', usersController.getProfile)
    .post('/profile', usersController.updateProfile)
    .get('/', function (req, res) {
        res.render('index', { currentUser: req.user });
    })
    .get('*', function (req, res) {
        res.render('index', { currentUser: req.user });
    });

module.exports = function (app) {
    app.use('/account', router);
};