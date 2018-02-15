let fs = require('fs');
fs.readFile(process.argv[2], 'utf8', function (err, str) {
  if (err) {
    return console.log(err);
  }
  let lines = str.split(/\n/).length - 1;
  console.log(lines);
});
