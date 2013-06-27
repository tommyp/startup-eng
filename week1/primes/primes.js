#!/usr/bin/env node
var fs = require('fs');
var outfile = "primes.txt";




function find_primes(start, limit) {
  var primes = [], i, j;
  
  for (i = start; primes.length <= limit; i++) {
    var square = Math.sqrt(i);
    var jump;
    var factors = []
    for (j = start; j <= square; j++) {
      var result, top, bottom;
      result = i/j
      top = Math.ceil(result)
      bottom = Math.floor(result)
      console.log(i + ' Result: ' + result + ' Floor: ' + bottom + ' Top: ' + top)
      if (result === top && result === bottom ) {
        factors.push(j)
      }
    }
    console.log(factors)
    if (factors.length == 0) {
      console.log(i + ' is a prime')
      primes.push(i);
    }
  }
  return primes;
}




fs.writeFileSync(outfile, find_primes(2, 100).join(','));  
console.log("Script: " + __filename + "\nWrote: To: " + outfile);