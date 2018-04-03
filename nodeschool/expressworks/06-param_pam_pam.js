let express = require('express');
let app = express();

app.put('/message/:id', function(req, res) {
  let hash = require('crypto')
    .createHash('sha1')
    .update(new Date().toDateString() + req.params.id)
    .digest('hex');
  res.end(hash);
});
app.listen(process.argv[2]);
