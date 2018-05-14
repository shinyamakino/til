let express = require('express');
let fs = require('fs');
let app = express();

app.get('/books', function(req, res) {
  fs.readFile(process.argv[3], function(err, str) {
    if (err) {
      return res.sendStatus(500);
    }
    res.json(JSON.parse(str));
  });
});
app.listen(process.argv[2]);
