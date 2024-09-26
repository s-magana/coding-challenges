// In this kata, you will do addition and subtraction on a given string. The return value must be also a string.

// Note: the input will not be empty.

// Examples
// "1plus2plus3plus4"  --> "10"
// "1plus2plus3minus4" -->  "2"

// My solutions: 
function calculate(str) {
    str = str.replace(/(plus)/gi, '+')
    str = str.replace(/(minus)/gi, '-')
    return eval(str).toString()
}

function calculate(str) {
    return eval(str.replace(/plus/gi, '+').replace(/minus/gi, '-')).toString()
}