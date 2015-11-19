'use strict';

let res = 0;
for (let i = 2; i < process.argv.length; i++) {
  res += +process.argv[i];
}

console.log(res);