var fs = require('fs');
var objToExport = {};
var controllers = fs.readdirSync('./controllers/controllers');

for (var i = 0, length = controllers.length; i < length; i++) {
    var controllerFileName = controllers[i].substring(0, controllers[i].length - 3);
    var curController = require('./controllers/' + controllerFileName);
    objToExport[curController.name] = curController.data;
}

module.exports = objToExport;