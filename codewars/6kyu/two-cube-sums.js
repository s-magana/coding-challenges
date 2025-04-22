// Create a function which checks if a given number n can be written as the sum of two cubes in two different ways:

// n = a^3 + b^3 = c^3 + d^3
// n = a^3 + b^3 = c^3 + d^3
 

// All the numbers a, b, c and d should be different and greater than 0.

// Example
// 1729 --> true   
// // 1729 = 9³ + 10³ = 1³ + 12³

// 42   --> false  
// // cannot be expressed as the sum of two cubes in 2 different ways

// My solution: 
function hasTwoCubeSums(n) {
    let count = 0
    let length = Math.cbrt(n / 2);
    for(let i = 1; i < length; i++){
      let cbr = Math.cbrt(n - i * i * i);
      if (cbr == Math.floor(cbr))
        count++
    }
    return count >= 2
}