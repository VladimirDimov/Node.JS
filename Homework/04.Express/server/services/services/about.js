var about = require('../../data/about'),
    fs = require('fs');

module.exports = {
    getByName: function (name) {
        var promise = new Promise(function (resolve, reject) {
            about.findOne({ name: name }, function (err, dat) {
                if (err) reject(err);

                resolve(dat)
            });
        });

        return promise;
    },

    update: function (dat) {
        var promise = new Promise(function (resolve, reject) {
            about.update(dat, function (err, done) {
                if (err) reject(err);

                resolve(done);
            });
        });

        return promise;
    },

    uploadImage: function (file, extension) {        
        var fstream = fs.createWriteStream('./public/images/companyImage' + extension);
        file.pipe(fstream);
    },
    
    getCompanyImageUrl: function() {
        if(fs.existsSync('public/images/companyImage.bmp')) return '/images/companyImage.bmp';
        if(fs.existsSync('/images/companyImage.png')) return '/images/companyImage.png';
        if(fs.existsSync('/images/companyImage.jpg')) return '/images/companyImage.jpg';
        
        return '/images/companyImage-default.bmp';
    }
}