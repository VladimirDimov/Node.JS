var seeder = require('mongoose-seed');

module.exports = function (config) {
    // Connect to MongoDB via Mongoose 
    seeder.createConnection(config.db, function () {
	
        // Load Mongoose models 
        seeder.loadModels([
            '../data/models/User.js',
        ]);
 
        // Clear specified collections 
        seeder.clearModels(['User'], function () { 
            // Callback to populate DB once collections have been cleared 
            seeder.populateModels(data);

        });
    });
 
    // Data array containing seed data - documents organized by Model 
    var data = [
        {
            'model': 'User',
            'documents': [
                {
                    "username": "admin",
                    "salt": "Ac5TLqimEicUNcFiI92YiSXJWlxzloOuLywZ2bWEfyoa/PYGJLaIySSnNre6gtyQ/L7JiHS1qCQyhAumCZ2XsCohdHibGv5xYIPWqdraaR0/PqY7oBE4BScxjZ8yRc8bEhmRGRgy/5AnGHs/WukNQA3FDjpzIyT3V6bbq71Ba7Q=",
                    "hashPass": "2e7f6015e3d8e12aa30d1f81e66b7eccc0472050"
                }
            ]
        }
    ];
};