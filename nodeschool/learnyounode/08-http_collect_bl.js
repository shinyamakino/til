let http = require('http');
let bl   = require('bl');
let url  = process.argv[2];

http.get(url, function(response) {
  response.pipe(bl(function(err, data) {
    if (err) {
      return console.error(err);
    }
    data = data.toString();
    console.log(data.length);
    console.log(data);
  }));
});
