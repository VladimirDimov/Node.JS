var fs = require('fs');
var models = fs.readdirSync('./data/data')
    .map(function (item) {
        return item.substring(0, item.length - 3);
    });

var data = {};
for (var i = 0, length = models.length; i < length; i++) {
    data[models[i]] = require('./data/' + models[i]);
}

module.exports = data;