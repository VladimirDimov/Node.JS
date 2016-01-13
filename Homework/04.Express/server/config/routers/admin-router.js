var router = require('express').Router(),
    controllers = require('../../controllers'),
    auth = require('../auth')
    multer  = require('multer');

var UPLOAD_PATH = './public/images/products/';

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, UPLOAD_PATH)
    },
    filename: function (req, file, cb) {
        var fileName = Date.now()+'-'+ file.originalname;
        var fullPath = UPLOAD_PATH + fileName;
        console.log("huhuhuhuhuhuhuhuhuhuhuhuhuhu");
        console.log(fullPath.substring(8));
        req.body.imageUrl = fullPath.substring(8);
        cb(null,fileName );
    }
});
var upload = multer({ storage: storage });
router
    .get('/',function (req, res) {
        res.render('admin-index', {currentUser: req.user});
    })
    .get('/categories', controllers.categories.getAuthenticated)
    .get('/categories/add', controllers.categories.getAddCategory)
    .post('/categories/add', controllers.categories.create)
    .delete('/categories/remove', controllers.categories.remove)
    .get('/categories/manage', controllers.categories.getManage)
    .get('/about', controllers.about.getAboutAuthenticated)
    .get('/about/edit', controllers.about.getEdit)
    .post('/about', controllers.about.edit)
    .post('/about/uploadImage', controllers.about.uploadImage)
    .get('/products', controllers.products.getAuthenticated)
    .get('/products/remove/:id', controllers.products.remove)
    .post('/products/add', upload.single('productImage'), controllers.products.add)
    .get('/products/add', controllers.products.getAddForm)
    .get('/products/edit/:id', controllers.products.getUpdateForm)
    .post('/products/edit/:id', upload.single('productImage'), controllers.products.update)
    .get('*', function (req, res) {
        res.render('admin-index', {currentUser: req.user});
    });

module.exports = function (app) {
        app.use('/admin', auth.isInRole('admin'), router);
};