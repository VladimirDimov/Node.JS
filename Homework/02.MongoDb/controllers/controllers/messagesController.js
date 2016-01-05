var data = require('../../data');

module.exports = {
    name: 'messages',
    data: {
        send: function (req, res) {
            var body = req.body,
                fromUserId,
                toUserId,
                messageToSend

            data.users.getByUsername(body.from, function (err, dat) {
                if (err) {
                    res
                        .status(err.status || 400)
                        .send(err);
                };

                fromUserId = dat._id;
            });

            data.users.getByUsername(body.to, function (err, dat) {
                if (err) {
                    res
                        .status(err.status || 400)
                        .send(err);
                };

                toUserId = dat._id;
            });

            messageToSend = {
                from: fromUserId,
                to: toUserId,
                text: body.text
            };

            data.messages.send(messageToSend, function (err, dat) {
                if (err) {
                    res.status(400)
                        .send(err.message);
                };

                res.send(dat);
            });
        },
        get: function (req, res) {
            res.render('messages');
        }
    }
};