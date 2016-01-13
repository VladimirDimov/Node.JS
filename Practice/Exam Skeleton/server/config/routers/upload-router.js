var router = require('express').Router(),
    controllers = require('../../controllers'),
    auth = require('../auth');

router
    .get('/', controllers.upload.get)
    .post('/', controllers.upload.post);

module.exports = function (app) {
    app.use('/upload', router);
};