// The trick with this one was to use the original order of urls as a map -
// if you do this, there's no need to remember the order.

'use strict';

var bl = require('bl');
var http = require('http');

const urls = [process.argv[2], process.argv[3], process.argv[4]];
var res = {};
var cnt = 0;

urls.forEach(function(url, i) {
  
  http.get(url, function callback (response) {
    
    response.pipe(bl(function (err, data) {
      if (err) 
        return console.error(err);
      data = data.toString();
      res[url] = data;
      cnt++;
      
      if (cnt === 3) {
        for (let u of urls) {
          console.log(res[u]);
        }
      }
      
    }));
    
    
  });

});



