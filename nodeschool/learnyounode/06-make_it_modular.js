let filter = require('./06-filter_module');
let dir = process.argv[2];
let ext = process.argv[3];
filter(dir, ext, function(err, files) {
  if (err) {
    return console.log(err);
  }
  files.forEach(function(file) {
    console.log(file);
  });
});
