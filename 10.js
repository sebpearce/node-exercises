'use strict';

var strftime = require('strftime');
var net = require('net');
var port = process.argv[2];
var server = net.createServer(function (socket) {

  let currentTime = strftime('%Y-%m-%d %H:%M\n', new Date());
  socket.write(currentTime);
  socket.end(); // optionally do .end(data) to write then close
  
});
server.listen(port);
