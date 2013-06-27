#!/usr/bin/env node
var fs = require('fs');
var outfile = "primes.txt";




function find_primes(start, limit) {
  var primes = [], i, j;
  
  for (i = start; primes.length <= limit; i++) {
    for (j = start; j <= Math.sqrt(i); j++) {
      var result, top, bottom;
      result = i/j
      top = Math.ceil(result)
      bottom = Math.floor(result)
      console.log(i + ' Result: ' + result + ' Floor: ' + bottom + ' Top: ' + top)
      if (result === top && result === bottom ) {
        console.log(i + ' not a prime')
      } else {
        console.log(i + ' is a prime')
        primes.push(i);
      }
    }
  }

  return primes;
}




fs.writeFileSync(outfile, find_primes(2, 100).join(','));  
console.log("Script: " + __filename + "\nWrote: To: " + outfile);