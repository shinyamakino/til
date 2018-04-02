let express = require('express');
let app = express();

app.use(require('stylus').middleware({ src: process.argv[3] }));
app.use(express.static(process.argv[3]));

app.listen(process.argv[2]);
