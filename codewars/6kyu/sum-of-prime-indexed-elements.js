// In this Kata, you will be given an integer array and your task is to return the sum of elements occupying prime-numbered indices.

// The first element of the array is at index 0.

// Good luck!

// My solution:
function total(arr){
    return arr.reduce((acc, c, i) => acc + (isPrime(i) ? c : 0), 0)
}
function isPrime(n) {
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false
    }
    return n > 1
}