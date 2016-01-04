var formidable = require('formidable'),
    http = require('http'),
    util = require('util'),
    fs = require('fs-extra'),
    guid = require('guid'),
    statics = require('node-static');


const port = 3000;

http.createServer(function (req, res) {
    /* Process the form uploads */
    if (req.url == '/upload' && req.method.toLowerCase() == 'post') {
        var form = new formidable.IncomingForm();
        form.parse(req, function (err, fields, files) {
            res.writeHead(200, { 'content-type': 'text/plain' });
            // res.write('received upload:\n\n');
            // res.write(util.inspect({ fields: fields, files: files }));
        });

        form.on('end', function (fields, files) {
            /* Temporary location of our uploaded file */
            var temp_path = this.openedFiles[0].path;
            /* The file name of the uploaded file */
            var lastDotPosition = this.openedFiles[0].name.lastIndexOf('.');
            var fileExtension = this.openedFiles[0].name.substring(lastDotPosition, this.openedFiles[0].length);
            var file_name = guid.raw() + fileExtension;
            /* Location where we want to copy the uploaded file */
            var new_location = __dirname + '\\files\\';

            fs.copy(temp_path, new_location + file_name, function (err) {
                if (err) {
                    console.error(err);
                    res.end();
                } else {
                    res.write('Download link: ');
                    res.write('http://localhost:' + port + '/files/' + file_name);
                    console.log("success!");
                    res.end();
                }
            });
        });

        return;
    } else if (stringStartsWith(req.url, '/files/') && req.method.toLowerCase() == 'get') {
        var folder = new statics.Server('.');

        folder.serve(req, res);
    } else {
        /* Display the file upload form. */
        res.writeHead(200, { 'content-type': 'text/html' });
        res.end(
            '<form action="/upload" enctype="multipart/form-data" method="post">' +
            '<input type="file" name="upload"><br>' +
            '<input type="submit" value="Upload">' +
            '</form>'
            );
    }
}).listen(port);

function stringStartsWith(string, prefix) {
    return string.slice(0, prefix.length) == prefix;
}