var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

module.exports.init = function () {
    var productSchema = new Schema({
        name: {type: String, required: true},
        description: {type: String, minlength: 5, maxlength: 500, required: true},
        price: {type: Number, required: true},
        imageUrl: {type: String, default: ''},
        dateUpdated: {type: Date, default: Date.now},
        quantity: Number,
        categories: [{type: Schema.Types.ObjectId, ref: 'Category'}]
    });

    productSchema.post('save', function (doc) {
        console.log(doc);

        var Category = require('mongoose').model('Category');
        Category.findOne({'_id': doc.categories[0]}).exec(function (err, category) {
            console.log(category);
            category.products.push(doc.id);
            Category.update({_id: category._id}, category, function (err, success) {
                if (err) {
                    console.log(err);
                    return;
                }
                console.log("Category updated with " + doc.name + "!");
            });

        });

        console.log('%s has been saved', doc._id);
    });

    productSchema.post('remove', function (doc) {

        var Category = require('mongoose').model('Category');

        Category.findOne({'_id': doc.categories[0]}).exec(function (err, category) {
            console.log(category);
            var index = category.products.indexOf(doc.id);
            if (index !== -1) {
                category.products.splice(index, 1);
            }
            Category.update({_id: category._id}, category, function (err, success) {
                if (err) {
                    console.log(err);
                    return;
                }
                console.log("Product removed from category with name:"+doc.name+"!");
            });

        });
    });

    var Product = mongoose.model('Product', productSchema);

    var Category = require('mongoose').model('Category');

    Product.find({}).exec(function (err, collection) {
        if (err) {
            console.log('Cannot find Products: ' + err);
            return;
        }

        // Seeding products
        if (collection.length === 0) {

            Category.find({}).exec(function (err, categories) {
                if (err) {
                    console.log(err);
                    return;
                }
                console.log(categories);

                for (var index = 0; index < 4; index++) {
                    Product.create({
                        name: 'Product ' + index,
                        description: 'Product ' + index + ' description',
                        price: 15,
                        quantity: 1,
                        categories: [categories[index]]
                    }, function (err, product) {
                        if (err) {
                            console.log(err);
                            return;
                        }

                        var ind = product.name.split(' ')[1] | 0;

                        console.log(product.name + " seeded success!");
                        console.log(categories[ind]);
                        categories[ind].products.push(product);
                        Category.update({_id: categories[ind]._id}, categories[ind], function (err, success) {
                            if (err) {
                                console.log(err);
                                return;
                            }
                            console.log("Category seeded with " + product.name + "success!");
                        });
                    });
                }
            });
        }
    });
};