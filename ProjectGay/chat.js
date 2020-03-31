var socket = io.connect('vektoren.netlify.com:8886');
var btn = document.getElementById('send');
btn.addEventListener('click', function(){
  socket.emit('chat', "gay");
});
socket.on('chat', function(data){
  console.log(data)
})
