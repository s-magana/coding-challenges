// Description:
// Count the number of exclamation marks and question marks, return the product.

// Examples
// ""          --->   0
// "!"         --->   0
// "!ab? ?"    --->   2
// "!!"        --->   0
// "!??"       --->   2
// "!???"      --->   3
// "!!!??"     --->   6
// "!!!???"    --->   9
// "!???!!"    --->   9
// "!????!!!?" --->  20

// My solution: 
function product (string) {
    let exclamations = string.split('').filter(e => e === '!').length
    let questions = string.split('').filter(e => e === '?').length
    return exclamations * questions
}