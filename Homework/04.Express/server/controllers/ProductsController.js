var categories = require('../data/products'),
    services = require('../services');

module.exports = {
    get: function (req, res) {
        services.products.getAll()
            .then(function (dat) {
                console.log(dat);
                res.render('products/products', {products: dat});
            }, function (err) {
                res
                    .status(404)
                    .send(err);
            });
    },
    getAuthenticated: function (req, res) {
        services.products.getAll()
            .then(function (dat) {
                console.log(dat);
                res.render('products/productsAdmin', {products: dat});
            }, function (err) {
                res
                    .status(404)
                    .send(err);
            });
    },
    add: function (req, res) {
        console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
        console.log(req.body.imageUrl);
        services.products.create(req.body)
            .then(function (dat) {
                console.log(dat);
                res.status(201);
                res.redirect("/admin/products");
            }, function (err) {
                res.status(404)
                    .send(err);
            });
    },
    getAddForm: function (req, res) {
        services.categories.getAll()
            .then(function (dat) {
                res.render('products/add-product', {categories: dat});
            }, function (err) {
                res.status(404)
                    .send(err);
            });
    },
    remove: function (req, res) {
        services.products.removeById(req.params.id)
            .then(function (dat) {
                console.log('product removed');
                res.redirect('/admin/products');
            }, function (err) {
                console.log(err.message);
                res.status(404)
                    .send(err.message);
            });
    },
    getById: function (req, res) {
        console.log("request parameters >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
        console.log(req.params);
        services.products.getById(req.params.id)
            .then(function (product) {
                res.render('products/details', {product: product});
            }, function (err) {
                console.log(err.message);
                res.status(404)
                    .send(err.message);
            })
    },
    update: function (req, res) {
        console.log("_____________REQ BODY___________________");
        console.log(req.body);
        services.products.update(req.params.id, req.body)
            .then(function (product) {
                res.redirect('/products/' + req.params.id);
            }, function (err) {
                res.status(404)
                    .send(err.message);
            });
    },
    getUpdateForm: function (req, res) {
        services.categories.getAll().then(function (categories) {
            services.products.getById(req.params.id)
                .then(function (product) {
                    res.render('products/edit', {product: product, categories: categories});
                }, function (err) {
                    res.status(404)
                        .send(err.message);
                })
        });
    }
};
