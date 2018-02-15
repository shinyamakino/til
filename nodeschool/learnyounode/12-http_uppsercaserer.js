let http = require('http');
let port = process.argv[2];

let server = http.createServer(function(request, response) {
  let data = '';
  request.on('data', function(chunk) {
    data += chunk.toString().toUpperCase();
  });
  request.on('end', function() {
    response.write(data);
    response.end();
  });
});
server.listen(port);
