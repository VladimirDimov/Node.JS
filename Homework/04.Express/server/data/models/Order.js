var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

module.exports.init = function () {
    var orderSchema = new Schema({
        dateTime: { type: Date, default: Date.now },
        products: [{ product: { type: Schema.Types.ObjectId, ref: 'Product' }, number: Number }],
        user: { type: Schema.Types.ObjectId, ref: 'User' },
        approved: { type: Boolean, default: false }
    });

    var Order = mongoose.model('Order', orderSchema);
};