var services = require('../services');

module.exports = {
    get: function (req, res) {
        res.render('files/upload');
    },
    post: function (req, res) {
        res.render('home');
    }
};