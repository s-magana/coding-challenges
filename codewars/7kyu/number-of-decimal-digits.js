// Determine the total number of digits in the integer (n>=0) given as input to the function. For example, 9 is a single digit, 66 has 2 digits and 128685 has 6 digits. Be careful to avoid overflows/underflows.

// All inputs will be valid.

// My solution: 
function digits(n) {
    let sum = 0
    let arr = String(n).split('').forEach(e => sum++)
    return sum
}

function digits(n) {
    return n.toString().length;
}