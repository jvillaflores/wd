const express = require ('express');
const path = require('path');

const app = express();

const port = process.argv[2];

app.put('/message/:id', function(req,res)
{
    var id = req.params.id;


    res.send(require('crypto')
    .createHash('sha1')
    .update(new Date().toDateString() + id)
    .digest('hex'));
    

    
});

// app.use(require('stylus').middleware(indexFile|| path.join(__dirname, 'public')));
// app.use(express.static(indexFile || path.join (__dirname, 'public')));


app.listen(port);