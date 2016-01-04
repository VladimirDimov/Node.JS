module.exports = {
    name: 'home',
    data: {
        get: function (req, res) {
            res.send('Home page');
        }
    }
};