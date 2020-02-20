const express = require ('express');
const app = express();

const post = process.argv[2];

app.get('/search', function(req,res)
{
    var name = req.query;
    res.send(name);
});

app.listen(post);