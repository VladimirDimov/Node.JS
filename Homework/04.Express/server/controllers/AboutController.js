var services = require('../services');

module.exports = {
    getAbout: function (req, res) {
        services.about.getByName('about')
            .then(function (dat) {
                var imageUrl = services.about.getCompanyImageUrl();
                res.render('about/about', {
                    info: dat.data,
                    imageUrl: imageUrl
                });
            }, function (err) {
                res.status(404)
                    .end();
            });
    },

    getAboutAuthenticated: function (req, res) {
        services.about.getByName('about')
            .then(function (dat) {
                var imageUrl = services.about.getCompanyImageUrl();
                res.render('about/adminAbout', {
                    info: dat.data,
                    imageUrl: imageUrl
                });
            }, function (err) {
                res.status(404)
                    .end();
            });
    },

    getEdit: function (req, res) {
        services.about.getByName('about')
            .then(function (dat) {
                res.render('about/about-manage', { info: dat.data });
            }, function (err) {
                res.status(404)
                    .end();
            });
    },

    edit: function (req, res) {
        services.about.update(req.body)
            .then(function (dat) {
                res.redirect('/admin/about')
            }, function (err) {
                res.status(404)
                    .send(err);
            });
    },

    uploadImage: function (req, res) {
        req.pipe(req.busboy);
        req.busboy.on('file', function (fieldname, file, filename) {
            var extension = filename.substring(filename.lastIndexOf('.'))
            services.about.uploadImage(file, extension);
            res.end();
        });
    }
};