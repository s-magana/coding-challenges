// Task:
// Your job is to write a function, which takes three integers a, b, and c as arguments, and returns True if exactly two of the three integers are positive numbers (greater than zero), and False - otherwise.

// Examples:
// twoArePositive(2, 4, -3) == true
// twoArePositive(-4, 6, 8) == true
// twoArePositive(4, -6, 9) == true
// twoArePositive(-4, 6, 0) == false
// twoArePositive(4, 6, 10) == false
// twoArePositive(-14, -3, -4) == false

// My solutions: 
function twoArePositive(a, b, c) {
    return [...arguments].filter(i => i > 0).length === 2
}

function twoArePositive(...args) {
    return args.filter(e => e > 0).length === 2
}