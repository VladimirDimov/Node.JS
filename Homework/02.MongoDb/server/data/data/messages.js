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
    },

    getByUser: function (firstUserId, secondUserId, cb) {
        Message
            .find({
                $and: [
                    { $or: [{ from: firstUserId }, { from: secondUserId }] },
                    { $or: [{ to: firstUserId }, { to: secondUserId }] }
                ]
            }, function (err, dat) {
                if(err) return cb(err);
                
                return cb(null, dat);
            });
    }
};