const express = require ('express');
const path = require('path');

const stylus = require('stylus');

const app = express();

const port = process.argv[2];
const indexFile = process.argv[3];


app.use(require('stylus').middleware(indexFile|| path.join(__dirname, 'public')));
app.use(express.static(indexFile || path.join (__dirname, 'public')));


app.listen(port);