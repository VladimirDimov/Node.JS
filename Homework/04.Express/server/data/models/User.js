var mongoose = require('mongoose'),
    encryption = require('../../utilities/encryption');

module.exports.init = function () {
    var userSchema = mongoose.Schema({
        username: { type: String, require: '{PATH} is required', unique: true },
        salt: String,
        hashPass: String,
        points: Number,
        roles: String
    });

    userSchema.method({
        authenticate: function (password) {
            if (encryption.generateHashedPassword(this.salt, password) === this.hashPass) {
                return true;
            }
            else {
                return false;
            }
        }
    });

    var User = mongoose.model('User', userSchema);

    User.find({}).exec(function (err, collection) {
        if (err) {
            console.log('Cannot find users: ' + err);
            return;
        }

        if (collection.length === 0) {
            var salt;
            var hashedPwd;

            salt = encryption.generateSalt();
            hashedPwd = encryption.generateHashedPassword(salt, 'admin');
            User.create({ username: 'admin', salt: salt, hashPass: hashedPwd, roles: ['admin'] });

            var salt2 = encryption.generateSalt();
            var hashedPwd2 = encryption.generateHashedPassword(salt2, 'user');
            User.create({ username: 'user', salt: salt2, hashPass: hashedPwd2, roles: ['user'] });
        }
    });
};