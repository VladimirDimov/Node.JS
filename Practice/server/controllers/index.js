var fs = require('fs');
var controllers = fs.readdirSync('./controllers/controllers');
var allModules = {};

for (var i = 0, length = controllers.length; i < length; i++) {
    var controllerFileName = controllers[i].substring(0, controllers[i].length - 3);
    var curController = require('./controllers/' + controllerFileName);
    allModules[curController.name] = curController.data;
}

module.exports = allModules;