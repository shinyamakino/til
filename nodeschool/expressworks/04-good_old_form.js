let express = require('express');
let bodyparser = require('body-parser');
let app = express();

app.use(bodyparser.urlencoded({ extended: true }));

app.post('/form', function(req, res) {
  res.end(req.body.str.split('').reverse().join(''));
});
app.listen(process.argv[2]);
