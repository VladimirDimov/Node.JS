var Category = require('mongoose').model('Category');

module.exports = {
    create: function (order, callback) {
        Category.create(order, callback);
    },

    remove: function (category, callback) {
        category.remove(function (err, done) {
            if (err) return callback(err);

            return callback(null, done);
        });
    },

    all: function (callback) {
        Category
            .find()
            .populate('products')
            .exec(function (err, done) {
                if (err) {
                    return callback(err);
                };

                callback(null, done);
            });
    },

    getById: function (id, callback) {
        Category.findOne({ _id: id }, function (err, done) {
            if (err) return callback(err);

            return callback(null, done);
        });
    }
};