var filterFn = require('./make-it-modular.js')
var dir = process.argv[2]
var filterStr = process.argv[3]

function bar (callback) {
    foo(function (err, data) {
      if (err) { return callback(err) } // early return        

      // ... no error, continue doing cool things with `data`  

      // all went well, call callback with `null` for the error argument  

      callback(null, data)
    })
  }