// In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.

// Solve("*'&ABCDabcde12345") = [4,5,5,3]. 
// --the order is: uppercase letters, lowercase, numbers and special characters.
// More examples in the test cases.

// Good luck!

// My solutions: 
function solve(s){
    let upper = (s.match(/[A-Z]/g) || []).length
    let lower = (s.match(/[a-z]/g) || []).length
    let num = (s.match(/[0-9]/g) || []).length
    let special = s.length - upper - lower - num
    return [upper, lower, num, special]
}

function solve(s){
    let upper = s.split('').filter(e => e.match(/[A-Z]/)).length
    let lower = s.split('').filter(e => e.match(/[a-z]/)).length
    let num = s.split('').filter(e => e.match(/\d/)).length
    let special = s.length - upper - lower - num
    return [upper, lower, num, special]
}