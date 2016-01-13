var categories = require('../../data/categories');

module.exports = {
    getAll: function () {
        var promise = new Promise(function (resolve, reject) {
            categories.all(function (err, done) {
                if (err) {
                    reject(err);
                };

                resolve(done);
            });
        });

        return promise;
    },

    create: function (category) {
        var promise = new Promise(function (resolve, reject) {
            categories.create(category, function (err, done) {
                if (err) {
                    reject(err);
                };

                resolve(done);
            });
        });

        return promise;
    },

    removeById: function (id) {
        var promise = new Promise(function (resolve, reject) {
            categories.getById(id, function (err, dat) {
                if (err) reject(err);
                if (!dat) {
                    reject(new Error('Invalid category id!'));
                } else {
                    categories.remove(dat, function (err, done) {
                        if (err) reject(err);

                        resolve(done);
                    });
                };
            });
        });

        return promise;
    }
}