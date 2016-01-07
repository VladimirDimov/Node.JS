var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

module.exports.init = function () {
    var messageSchema = new Schema({
        from: { type: Schema.ObjectId, ref: "User" },
        to: { type: Schema.ObjectId, ref: "User" },
        text: { type: String, minlength: 1 }
    });

    var Message = mongoose.model('Message', messageSchema);
};