var User = require('mongoose').model('User');

module.exports = {
    create: function (user, callback) {
        User.create(user, callback);
    },

    update: function (id, user, callback) {
        User.findOne({ _id: id }, function (err, dat) {
            if (err) callback(err);
            dat.salt = user.salt;
            dat.hashPass = user.hashPass;
            dat.save(function (err, dat) {
                if (err) callback(err);
                callback(null, dat);
            });
        });
    }
};