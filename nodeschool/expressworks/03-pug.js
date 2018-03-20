let express = require('express');
let app = express();
app.set('view engine', 'pug');

app.get('/home', function(req, res) {
  app.set('views', process.argv[3]);
  res.render('index', { date: new Date().toDateString() }); 
});
app.listen(process.argv[2]);
