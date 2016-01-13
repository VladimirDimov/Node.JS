var socketio = require('socket.io');

module.exports.listen = function (app) {
    io = socketio.listen(app);
    io.on('connection', function (socket) {
        socket.on('message', function (msg) {
            if (msg.message.length > 0) {
                io.emit('message', {
                    message: msg.message,
                    username: msg.username,
                    time: Date.now()
                });
            }
        });
    });

    return io;
}