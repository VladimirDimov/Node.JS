var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

module.exports.init = function () {
    var categorySchema = new Schema({
        name: { type: String, minlength: 2, maxlength: 25, required: true },
        description: { type: String, minlength: 5, maxlength: 200 },
        products: [{ type: Schema.Types.ObjectId, ref: 'Product' }]
    });

    var Category = mongoose.model('Category', categorySchema);

    Category.find({}).exec(function (err, collection) {
        if (err) {
            console.log('Cannot find users: ' + err);
            return;
        }
        
        // Seeding categories
        if (collection.length === 0) {
            for (var index = 1; index < 6; index++) {
                Category.create({
                    name: 'Category ' + index,
                    description: 'Category ' + index + ' description',
                    products: []
                });
            };
        };
    });
};