const fs = require('fs')        
const file = process.argv[2]

fs.readFile (file, function (err,contents){

const line = contents.toString().split('\n').length - 1  //delimiter
console.log(line)


})
