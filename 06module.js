'use strict';

var fs = require('fs');
var path = require('path');

// assign function to module.exports to export it
module.exports = function listOnly(dirName, ext, callback) {
  
  fs.readdir(dirName, function rdCallback(err, list) {
    if (err)
      return callback(err); 
      
    list = list.filter(function(el){
      return path.extname(el) === '.' + ext;
    });
    
    callback(null, list);
  });
  
};
