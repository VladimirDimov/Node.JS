module.exports = function routeConfig() {
    require('fs')
        .readdirSync('./server/data/models')
        .filter(function (file) {
            return file !== 'modelsInitializer.js'
        })
        .forEach(function (file) {
            var filePath = './' + file;
            require(filePath).init();
        });
};