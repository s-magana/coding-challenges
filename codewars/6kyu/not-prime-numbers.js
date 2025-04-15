// You are given two positive integers a and b (a < b <= 20000). Complete the function which returns a list of all those numbers in the interval [a, b) whose digits are made up of prime numbers (2, 3, 5, 7) but which are not primes themselves.

// Be careful about your timing!
    
// Good luck :)

// My solution: 
function notPrimes(a,b){
    let result = []
    for (let i = a; i <= b; i++) {
        if (String(i).split``.every(e => isPrime(e)) && !isPrime(i)) {
        result.push(i)
        }
    }
    return result
}

function isPrime(n) {
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false
    }
    return n > 1
}