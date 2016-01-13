var router = require('express').Router(),
    controllers = require('../../controllers'),
    auth = require('../auth');

router
    .get('/', controllers.categories.get);

module.exports = function (app) {
    app.use('/categories', router);
};