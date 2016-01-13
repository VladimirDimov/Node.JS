var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

module.exports.init = function () {
    var commonSchema = new Schema({
        name: { type: String, minlength: 1, maxlength: 25, required: true },
        data: { type: Object, required: true }
    });

    var Common = mongoose.model('Common', commonSchema);

    Common.findOne({ name: 'about' }).exec(function (err, dat) {
        if (err) {
            console.log('Cannot find about: ' + err);
            return;
        }
        
        // Seeding categories
        if (!dat) {
            dat = {
                companyName: 'No name',
                companyDescription: 'No description'
            };

            Common.create({
                name: 'about',
                data: dat
            });
        };
    });
};