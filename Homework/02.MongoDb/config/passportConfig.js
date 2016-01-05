var passport = require('passport');
var Strategy = require('passport-http-bearer').Strategy;

var data = require('../data');

module.exports = function () {
    // Configure the Bearer strategy for use by Passport.
    // The Bearer strategy requires a `verify` function which receives the
    // credentials (`token`) contained in the request.  The function must invoke
    // `cb` with a user object, which will be set at `req.user` in route handlers
    // after authentication.
    passport.use(new Strategy(
        function (token, cb) {
            data.users.getByToken(token, function (err, user) {
                if (err) { return cb(err); }
                if (!user) { return cb(null, false); }
                return cb(null, user);
            });
        }));
};