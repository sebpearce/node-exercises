'use strict';

// prefixed with ./ and .js is optional
var listOnly = require('./06module');

var dir = process.argv[2];
var ext = process.argv[3];

listOnly(dir, ext, function callback(err, data){
  if (err) 
    return console.error('Error: ', err);
  for (let line of data) {
    console.log(line);
  }
});

