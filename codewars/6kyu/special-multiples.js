// Some numbers have the property to be divisible by 2 and 3. Other smaller subset of numbers have the property to be divisible by 2, 3 and 5. Another subset with less abundant numbers may be divisible by 2, 3, 5 and 7. These numbers have something in common: their prime factors are contiguous primes.

// Implement a function that finds the amount of numbers that have the first N primes as factors below a given limit.

// Let's see some cases:

// count_specMult(3, 200)  =>  6 

// The first 3 primes are: 2, 3 and 5.

// And the found numbers below 200 are: 30, 60, 90, 120, 150, 180.
// Happy coding!!

// My solution: 
const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59]
function countSpecMult(n, mxval) {
    const prime = primes.slice(0, n).reduce((acc, c) => acc * c, 1)
    return Math.floor(mxval / prime)
}