var mongoose = require('mongoose'),
    seeder = require('seeder');

module.exports = function (config) {
    mongoose.connect(config.db);
    var db = mongoose.connection;

    db.once('open', function (err) {
        if (err) {
            console.log('Database could not be opened: ' + err);
            return;
        }

        console.log('Database up and running...');
    });

    db.on('error', function (err) {
        console.log('Database error: ' + err);
    });

    require('../data/models/modelsInitializer')();
};

var admin = {
    user: {
        // _id: "5252ce4ce4cfcd16f55cfade",
        username: "admin",
        salt: "Ac5TLqimEicUNcFiI92YiSXJWlxzloOuLywZ2bWEfyoa/PYGJLaIySSnNre6gtyQ/L7JiHS1qCQyhAumCZ2XsCohdHibGv5xYIPWqdraaR0/PqY7oBE4BScxjZ8yRc8bEhmRGRgy/5AnGHs/WukNQA3FDjpzIyT3V6bbq71Ba7Q=",
        hashPass: "2e7f6015e3d8e12aa30d1f81e66b7eccc0472050"
    }
};