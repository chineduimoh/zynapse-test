var io = require('socket.io').listen(3000);
// var app = require('express')();
// var http = require('http').createServer(app);
console.log('Server is listening')

io.on('connection', function (socket) {
    console.log('connected:', socket.client.id);
    socket.on('serverEvent', function (data) {
        console.log('new message from client:', data);
    });
    setInterval(function () {
        let a =0;
        socket.emit('clientEvent', a);
        a++;
        console.log('message sent to the clients');
    }, 600000);
});