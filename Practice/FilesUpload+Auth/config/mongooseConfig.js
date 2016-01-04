require('mongoose');

module.exports = function (mongoose) {
    mongoose.connect('mongodb://localhost:27017/AuthUsers');
    
    var db = mongoose.connection;
    
    db.once('open', function(err) {
        if (err) {
            console.log('Database could not be opened: ' + err);
            return;
        }

        console.log('Database up and running...')
    });
    
    db.on('error', function(err){
        console.log('Database error: ' + err);
    });
    
    require('../models').init();
};