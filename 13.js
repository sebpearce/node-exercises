'use strict';

const http = require('http');
const url = require('url');
const port = +(process.argv[2]);
const parseTimePath = '/api/parsetime';
const unixTimePath = '/api/unixtime';

function parseTime (time) {
  return {
    'hour': time.getHours(),
    'minute': time.getMinutes(),
    'second': time.getSeconds(),
  };
}

function unixTime (time) {
  return {
    'unixtime': time.getTime(),
  };
}

const server = http.createServer(function callback(req, res){
  if (req.method != 'GET')
    return res.end('Need a get request.\n');
  
  let pathname = url.parse(req.url, true).pathname;
  let timeQuery = url.parse(req.url, true).query['iso'];
  let dateObj = new Date(timeQuery);
  let output;
  
  if (pathname === parseTimePath)
    output = parseTime(dateObj);
  if (pathname === unixTimePath)
    output = unixTime(dateObj);
 
  if (output) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify(output));
  } else {
    res.writeHead(404);
    res.end();
  }
  
});

server.listen(port);