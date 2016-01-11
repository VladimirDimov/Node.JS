var express = require('express');

module.exports = function (app) {
    app.set('views', './views');
    app.set('view engine', 'jade');
    app.use('/public', express.static('./public'));
};