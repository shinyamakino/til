const http = require('http');
const bl   = require('bl');

function getURL(url) {
  return new Promise(function(resolve, reject) {
    http.get(url, function(response) {
      response.pipe(bl(function(err, data) {
        if (err) {
          reject(err);
        }
        data = data.toString();
        resolve(data);
      }));
    }).on('error', function(error) {
      reject(error);
    });
  });
}

let promises = [];
for (let i = 2; i < process.argv.length; i++) {
  promises.push(getURL(process.argv[i]));
} 

Promise.all(promises).then(function(res) {
  for (let i = 0; i < res.length; i++) {
    console.log(res[i]);
  }
}).catch(function(error) {
  console.error(error);
});
