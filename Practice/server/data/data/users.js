var mongoose = require('mongoose');
var Guid = require('guid');
var User = mongoose.model('User');

module.exports = {
    register: function (user, cb) {
        var userToRegister = new User(user);
        userToRegister.save(function (err, dat) {
            if (err) {
                return cb(err);
            }

            return cb(null, dat);
        });
    },

    login: function (user, cb) {
        User.
            findOne({ username: user.username })
            .exec(function (err, dat) {
                if (err) {
                    return cb(err);
                };

                if (!dat) {
                    return cb('Invalid username!');
                }

                if (user.password != dat.password) {
                    return cb('Invalid password!');
                };

                updateToken(dat, function (err, dat) {
                    if (err) {
                        return cb(err);
                    };

                    return cb(null, {
                        _id: dat._id,
                        username: dat.username,
                        token: dat.token
                    });
                });
            });
    },

    getById: function (id, cb) {
        User
            .findById(id, function (err, dat) {
                if (err) {
                    return cb(err);
                };

                return cb(dat);
            });
    },

    getByUsername: function (username, cb) {
        User
            .findOne({ username: username }, function (err, dat) {
                if (err) {
                    return cb(err);
                };

                return cb(null, dat);
            });
    },

    getByToken: function (token, cb) {
        User.findOne({ token: token }, function (err, dat) {
            if (err) return cb(err);
            return cb(null, dat);
        });
    }
};

function updateToken(user, cb) {
    user.token = Guid.raw();
    user.save(function (err, dat) {
        if (err) {
            return cb(err);
        };

        return cb(null, dat);
    });
};