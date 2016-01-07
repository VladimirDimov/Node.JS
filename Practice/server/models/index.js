var fs = require('fs');
var models = fs.readdirSync('./models/models')
    .map(function (item) {
        return item.substring(0, item.length - 3);
    });

module.exports = {
    init: function () {
        for (var i = 0, length = models.length; i < length; i++) {
            require('./models/' + models[i]).init();
        }
    }
};