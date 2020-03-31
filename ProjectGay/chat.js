var socket = io.connect('https://vektoren.netlify.com.8886/projectgay/');
var btn = document.getElementById('send');
btn.addEventListener('click', function(){
  socket.emit('chat', "gay");
});
socket.on('chat', function(data){
  console.log(data)
})
