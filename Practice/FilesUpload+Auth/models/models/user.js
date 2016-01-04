var validator = require('../../common/validator');
var mongoose = require('mongoose');

module.exports.init = function () {

    var userSchema = new mongoose.Schema({
        username: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        token: { type: String }
    });

    userSchema.pre('save', function (next) {
        try {
            validator.validateLength(this.username, 3, 10, 'Username');
        } catch (error) {
            var err = new Error(error);
            next(err);
        }
        
        next();
    });

    var User = mongoose.model('User', userSchema);
};