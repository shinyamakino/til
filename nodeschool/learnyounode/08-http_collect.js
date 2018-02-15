let http = require('http');
let url = process.argv[2];

http.get(url, function(response) {
  let data = '';

  response.setEncoding('utf8');
  response.on('data', function(chunk) {
    data += chunk;
  });
  response.on('error', function(error) {
    console.error(error);
  });
  response.on('end', function() {
    console.log(data.length);
    console.log(data);
  });
}).on('error', function(error) {
  console.error(error);
});
