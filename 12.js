'use strict';

var http = require('http');
var fs = require('fs');
var map = require('through2-map');
var port = process.argv[2];
var server = http.createServer(function callback(req, res) {
  
  if (req.method != 'POST')  
   return res.end('send me a POST\n');
         
  res.writeHead(200, { 'content-type': 'text/plain' });
  
  var map = require('through2-map');
  req.pipe(map(function (chunk) {
    return chunk.toString().toUpperCase();
  })).pipe(res);
  
});

server.listen(port);