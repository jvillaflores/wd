const express = require ('express');
const path = require('path');
const app = express();

const port = process.argv[2];
const template = process.argv[3];



app.set('view engine','pug');

app.set('views', template || path.join(__dirname, 'templates'));

app.get('/home', function(req, res){
    res.render('index',{date: new Date().toDateString()});
});
app.listen(port);