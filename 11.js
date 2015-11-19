'use strict';

var http = require('http');
var fs = require('fs');
var port = process.argv[2];
var path = process.argv[3];
var server = http.createServer(function callback(req, res) {
  res.writeHead(200, { 'content-type': 'text/plain' });
  fs.createReadStream(path).pipe(res);
  
});

server.listen(port);