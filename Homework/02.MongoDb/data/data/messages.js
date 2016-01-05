var Message = require('mongoose').model('Message');

module.exports = {
    send: function (message, cb) {
        var newMessage = new Message(message);
        newMessage.save(function (err, dat) {
            if (err) {
                return cb(err);
            };

            cb(null, dat);
        });
    }
};