const express = require ('express');
const path = require('path');
const app = express();

const port = process.argv[2];
const template = process.argv[3];

const bodyparser = require('body-parser');

app.use(bodyparser.urlencoded({extended: false}));

app.post('/form', function(req, res){
    
    res.send(req.body.str.split('').reverse().join(''));
});


app.listen(port);