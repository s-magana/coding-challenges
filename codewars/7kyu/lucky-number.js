// ###Lucky number

// Write a function to find if a number is lucky or not. If the sum of all digits is 0 or multiple of 9 then the number is lucky.

// 1892376 => 1+8+9+2+3+7+6 = 36. 36 is divisible by 9, hence number is lucky.

// Function will return true for lucky numbers and false for others.

// My solution: 
function isLucky(n) {
    let value = String(n).split('').reduce((acc, c) => +acc + +c, 0)
    return (value === 0 || value % 9 === 0)
}