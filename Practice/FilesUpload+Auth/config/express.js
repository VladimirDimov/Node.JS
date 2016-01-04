var express = require('express'),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    busboy = require('connect-busboy');

module.exports = function (app) {
    app.set('view engine', 'jade');
    app.set('views', './views');

    app.use(bodyParser.json());
    app.use(busboy());
    app.use(function (req, res) {
        req.busboy.on('file', function (fieldname, file, filename, encoding, mimetype) {
            req.body.filename = filename;
            req.body.file = file;
        });
    });
    app.use(morgan('dev'))
};