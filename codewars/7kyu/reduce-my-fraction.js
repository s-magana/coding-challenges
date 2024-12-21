// Write a function which reduces fractions to their simplest form! Fractions will be presented as an array/tuple (depending on the language) of strictly positive integers, and the reduced fraction must be returned as an array/tuple:

// input:   [numerator, denominator]
// output:  [reduced numerator, reduced denominator]
// example: [45, 120] --> [3, 8]
// All numerators and denominators will be positive integers.

// My solutions: 
function reduce(fraction) {
    let multiples = []
    for (let i = 1; i <= fraction[0]; i++) {
      if (fraction[0] % i === 0 && fraction[1] % i === 0) {
        multiples.push(i)
      }
    }
    return fraction.map(e => e / Math.max(...multiples))
}

const gcd = (a, b) => b ? gcd(b, a % b) : a;
function reduce (fraction) {
  const divisor = gcd(...fraction);
  return fraction.map(term => term / divisor);
}