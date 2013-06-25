#!/usr/bin/env node
var fs = require('fs');
var outfile = "primes.txt";
var primes = [];

function sieve(n, limit, sieved_numbers) {
  var new_sieved_numbers = []
  var i = n
  for (; i < limit;) {
    console.log(i);
    new_sieved_numbers.push(i)
    if (sieved_numbers.indexOf(i) == -1) {
      primes.push(i);
      sieve(i + n, limit, new_sieved_numbers);
    }
    i = i + n
  }
}

sieve(2, 100, []);

fs.writeFileSync(outfile, primes.join(','));  
console.log("Script: " + __filename + "\nWrote: To: " + outfile);