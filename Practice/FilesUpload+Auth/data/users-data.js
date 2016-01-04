var mongoose = require('mongoose');
var User = mongoose.model('User');
var uuid = require('node-uuid'); // GUID generator

module.exports = {
    save: function (data) {
        var promise = new Promise(function (resolve, reject) {
            data.token = '';
            var newUser = new User(data);
            newUser.save(function (error, success) {
                if (error) {
                    reject(error);
                } else {
                    resolve(success);
                }
            });
        });

        return promise;
    },
    getAll: function () {
        var promise = new Promise(function (resolve, reject) {
            var userModel = mongoose.model('User');
            userModel
                .find()
                .select('username')
                .exec(function (err, dat) {
                    if (err) {
                        reject(err);
                    }

                    resolve(dat);
                });
        });

        return promise;
    },
    findByToken: function (token, callback) {
        var userModel = mongoose.model('User');
        userModel
            .findOne({ 'token': token }, 'username token', function (err, dat) {
                if (err) return callback(err);

                return callback(null, dat);
            });
    },
    login: function (userInfo, callback) {
        var userModel = mongoose.model('User');
        userModel
            .findOne({ username: userInfo.username }, function (err, dat) {
                if (err) return callback(err);
                if (dat.password != userInfo.password) {
                    return callback('Invalid password!');
                } else {
                    var guid =  uuid.v1();
                    dat.token = guid;
                    dat.save(function(err) {
                        
                    });
                }

                return callback(dat.token);
            });
    }
};