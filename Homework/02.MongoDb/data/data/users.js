var mongoose = require('mongoose');
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
    }
};