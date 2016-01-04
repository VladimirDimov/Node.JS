var mongoose = require('mongoose');
var usersData = require('../../data/users-data');

module.exports = {
    name: 'auth',
    data: {
        getAllUsers: function (req, res) {
            usersData.getAll()
                .then(function (dat) {
                    res.send(dat);
                }).catch(function (err) {
                    res.send(err);
                });
        },
        register: function (req, res) {
            var userInfo = req.body;
            usersData.save(userInfo)
                .then(function (success) {
                    res.send(success);
                })
                .catch(function (error) {
                    res
                        .status(400)
                        .json(error.message);
                });
        },
        login: function (req, res) {
            var body = req.body;
            usersData.login(body, function (err, dat) {
                if (err) {
                    res
                        .status(err.status || 500)
                        .json(err);
                };

                res.send(dat);
            })
        }
    }
};