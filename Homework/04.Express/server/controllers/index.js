var UsersController = require('./UsersController');

module.exports = {
    users: UsersController,
    categories: require('./CategoriesController'),
    products: require('./ProductsController'),
    about: require('./AboutController'),
    chat:require('./ChatController')
};