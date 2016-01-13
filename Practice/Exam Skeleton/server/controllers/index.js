var UsersController = require('./UsersController');

module.exports = {
    users: UsersController,
    home: require('./HomeController'),
    upload: require('./UploadController')
};