const express = require ('express');
const fs = require('fs');
const app = express();

const port = process.argv[2];
const file = process.argv[3];

app.get('/books', function(req,res){
    fs.readFile(file, function(err,data){
        if(err) return err;
        const object = JSON.parse(data);
        res.json(object);
    });


});
app.listen(port);