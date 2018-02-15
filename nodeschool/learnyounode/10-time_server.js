let net  = require('net');
let port = process.argv[2];

function zeroPadding(num) {
  return ('00' + num).slice(-2);
}

function dateString() {
  let date = new Date()
  let year   = date.getFullYear();
  let month  = zeroPadding(date.getMonth() + 1);
  let day    = zeroPadding(date.getDate());
  let hour   = zeroPadding(date.getHours());
  let minute = zeroPadding(date.getMinutes());

  return year + '-' + month + '-' + day + ' ' + hour + ':' + minute;
}

let server = net.createServer(function(socket) {
  let date = dateString();
  socket.write(date + "\n");
  socket.end();
});
server.listen(port);
