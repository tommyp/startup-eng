#!/usr/bin/env node
var fs = require('fs');
var outfile = "primes.txt";

function sieve(n, limit) {
  var primes = [], sieve = [], i, j;

  for (i = n; i <= limit; ++i) {
    if (!sieve[i]) {
      primes.push(i)
      for (j = i << 1; j <= limit; j += i) {
        sieve[j] = true;
      }
    }
  }
  return primes;
}




fs.writeFileSync(outfile, sieve(2, 100));  
console.log("Script: " + __filename + "\nWrote: To: " + outfile);