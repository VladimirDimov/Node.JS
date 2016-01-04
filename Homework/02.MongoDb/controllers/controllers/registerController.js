module.exports = {
    name: 'register',
    data: {
        post: function (req, res) {
            var body = req.body;
            console.log(body);
        },
        get: function (req, res) {
            res.render('register');
        }
    }
};