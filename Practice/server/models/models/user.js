var mongoose = require('mongoose');

module.exports.init = function () {
    var userSchema = new mongoose.Schema({
        username: { type: String, index: { unique: true }, required: true, minlength: 3, maxlength: 15 },
        password: { type: String, required: true },
        token: { type: String }
    });

    var User = mongoose.model('User', userSchema);

    module.exports = User;
}