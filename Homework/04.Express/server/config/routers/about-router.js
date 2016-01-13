var router = require('express').Router(),
    controllers = require('../../controllers');
router
    .get('/', controllers.about.getAbout);

    module.exports = function (app) {
    app.use('/about', router);
};