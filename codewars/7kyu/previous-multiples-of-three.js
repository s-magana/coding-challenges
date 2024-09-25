// Given a positive integer n: 0 < n < 1e6, remove the last digit until you're left with a number that is a multiple of three.

// Return n if the input is already a multiple of three, and if no such number exists, return null, a similar empty value, or -1.

// Examples
// 1      => null
// 25     => null
// 36     => 36
// 1244   => 12
// 952406 => 9

// My solution: 
const prevMultOfThree = n => {
    if (n === 0) return null
    if (n % 3 === 0) return n
    return prevMultOfThree(Number(n.toString().slice(0, -1)))
}