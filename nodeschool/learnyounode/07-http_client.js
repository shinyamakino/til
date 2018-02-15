let http = require('http');
let url = process.argv[2];

http.get(url, function(response) {
  response.setEncoding('utf8');
  response.on('data', function(chunk) {
    console.log(chunk);
  });
  response.on('error', function(error) {
    console.error(error);
  });
}).on('error', function(error) {
  console.error(error);
});
