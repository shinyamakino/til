let fs = require('fs');
let buf = fs.readFileSync(process.argv[2]);
let str = buf.toString();
let lines = str.split(/\n/);
console.log(lines.length - 1);
