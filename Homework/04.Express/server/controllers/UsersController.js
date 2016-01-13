var encryption = require('../utilities/encryption'),
    users = require('../data/users'),
    encryption = require('../utilities/encryption');

var CONTROLLER_NAME = 'users';

module.exports = {
    getRegister: function (req, res, next) {
        res.render(CONTROLLER_NAME + '/register')
    },
    postRegister: function (req, res, next) {
        var newUserData = req.body;
        console.log(newUserData);
        if (newUserData.password != newUserData.confirmPassword) {
            req.session.error = 'Passwords do not match!';
            res.redirect('/account/register');
        }
        else {
            newUserData.salt = encryption.generateSalt();
            newUserData.hashPass = encryption.generateHashedPassword(newUserData.salt, newUserData.password);
            users.create(newUserData, function (err, user) {
                if (err) {
                    console.log('Failed to register new user: ' + err);
                    return;
                }

                req.logIn(user, function (err) {
                    if (err) {
                        res.status(400);
                        return res.send({ reason: err.toString() }); // TODO
                    }
                    else {
                        res.redirect('/');
                    }
                })
            });
        }
    },
    getLogin: function (req, res, next) {
        res.render(CONTROLLER_NAME + '/login');
    },

    getProfile: function (req, res) {
        res.render('users/profile', { user: req.user });
    },

    updateProfile: function (req, res) {
        var user = req.body;
        if (user.password) {
            var salt = encryption.generateSalt();
            var hashedPwd = encryption.generateHashedPassword(salt, user.password);
            users.update(req.user.id, { salt: salt, hashPass: hashedPwd }, function (err, dat) {
                if (err) res.status(400).send('err');
                res.redirect('/');
            });
        }
    }
};