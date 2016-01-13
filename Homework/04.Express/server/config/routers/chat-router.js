var router = require('express').Router(),
    controllers = require('../../controllers');
    
router
    .get('/', controllers.chat.get);

module.exports = function (app) {
    app.use('/chat', router);
};