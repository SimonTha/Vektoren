var express = require('express');
var socket = require('socket.io');

var app = express();
var server = app.listen('https://vektoren.netlify.com:8886/projectgay/', function(){
  console.log("listening to request to port 8886");
});
app.use(express.static('public'));

var io = socket(server);

io.on('connection', function(socket){
  console.log('made Socket connection', socket.id);
  socket.on('chat', function(data){
    io.sockets.emit('chat', data);
  })
});
