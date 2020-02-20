const express = require ('express');
const path = require('path');
const app = express();

const staticFile = process.argv[3];
const port = process.argv[2];


app.use(express.static(staticFile || path.join (__dirname, 'public')));

app.listen(port);