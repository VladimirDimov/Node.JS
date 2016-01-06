module.exports = {
    name: 'home',
    data: {
        get: function (req, res) {
            res.render('home');
        }
    }
}