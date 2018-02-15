let http = require('http');
let url  = require('url');

let server = http.createServer(function(req, res) {
  let req_url = url.parse(req.url, true);
  let date = new Date(req_url.query.iso);
  let result = null

  if (req_url.pathname === '/api/parsetime') {
    result = {
      'hour': date.getHours(),
      'minute': date.getMinutes(),
      'second': date.getSeconds()
    }
  } else if (req_url.pathname === '/api/unixtime') {
    result = { 'unixtime': date.getTime() }
  }

  if (result) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify(result));
  } else {
    res.writeHead(404);
  }
  res.end();
});
server.listen(Number(process.argv[2]));
