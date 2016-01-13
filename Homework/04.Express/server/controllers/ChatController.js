

module.exports = {
    get: function (req, res) {
        var username;
        if(req.user) {
            username = req.user.username;
        } else {
            username = 'Guest';
        }
        res.render('chat/chat', { username: username });
    }
};