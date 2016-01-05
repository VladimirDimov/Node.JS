var data = require('../../data');

module.exports = {
    name: 'messages',
    data: {
        send: function (req, res) {
            var body = req.body,
                fromUserId,
                toUserId,
                messageToSend

            fromUserId = req.user.id;

            data.users.getByUsername(body.to, function (err, dat) {
                if (err) {
                    res
                        .status(err.status || 400)
                        .send(err);
                };

                toUserId = dat.id;

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
            });
        },
        get: function (req, res) {
            res.render('messages');
        },

        getByUser: function (req, res) {
            data.users.getByUsername(req.query.user, function (err, dat) {
                if (err) {
                    res.status(err.status || 400).send(err);
                }

                if (dat == null) {
                    res.status(302).send('User not found');
                }

                data.messages.getByUser(req.user.id, dat.id, function (err, dat) {
                    if (err) {
                        res.status(err.status || 400);
                    };

                    res.send(dat);
                });
            });

        }
    }
};