let fs   = require('fs');
let http = require('http');
let port = process.argv[2];
let path = process.argv[3];

let server = http.createServer(function(request, response) {
  let src = fs.createReadStream(path);
  src.pipe(response);
});
server.listen(port);
