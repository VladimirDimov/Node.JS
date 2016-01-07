var mongoose = require('mongoose');
var data = require('../../data');

module.exports = {
    name: 'register',
    data: {
        post: function (req, res) {
            var user = req.body;
            data.users.register(user, function (err, dat) {
                if (err) {
                    res.status(404)
                        .send(err.message);
                };

                res.send(dat);
            });
        },
        get: function (req, res) {
            res.render('register');
        }
    }
};