'use strict';

var fs = require('fs');
var path = require('path');

var dir = process.argv[2];
var ext = '.' + process.argv[3];
fs.readdir(dir, function callback(err, list) {
  var result = list.filter(function(el){
    return path.extname(el) === ext;
  });
  for (let file of result) {
    console.log(file);
  }
});

/* official solution:

var fs = require('fs')  
var path = require('path')  
fs.readdir(process.argv[2], function (err, list) {  
 list.forEach(function (file) {  
   if (path.extname(file) === '.' + process.argv[3])  
     console.log(file)  
 })  
})  
*/