var fs = require('fs');

module.exports = {
    name: 'files',
    data: {
        get: function (req, res) {
            res.render('file-upload');
            // res.send('Upload files');
        },
        upload: function (req, res) {
            var data = req.body;
            var newPath = "./uploads/uploadedFileName";
            fs.writeFile(newPath, data, function (err) {
                if (err) Console.log(err);
                res.redirect("/files");
            });
        }
    }
};