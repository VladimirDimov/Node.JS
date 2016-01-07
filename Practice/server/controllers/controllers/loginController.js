var data = require('../../data');

module.exports = {
    name: 'login',
    data: {
        post: function (req, res) {
            var user = req.body;
            data.users.login(user, function (err, dat) {
                if (err) {
                    res.status(404)
                        .send(err.message);
                };

                res.cookie('token', dat.token);
                res.send(dat);
            });
        },
        get: function (req, res) {
            res.render('login');
        }
    }
};