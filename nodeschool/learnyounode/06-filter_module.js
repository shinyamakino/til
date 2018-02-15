module.exports = function(dir, ext, callback) {
  const fs = require('fs');
  const path = require('path');

  fs.readdir(dir, function(err, files) {
    if (err) {
      return callback(err);
    }
    let list = [];
    files.forEach(function(file) {
      if (path.extname(file) === '.' + ext) {
        list.push(file);
      }
    });
    callback(null, list);
  });
}
