var Order = require('mongoose').model('Order');

module.exports = {
    create: function(order, callback) {
        Order.create(order, callback);
    }
};