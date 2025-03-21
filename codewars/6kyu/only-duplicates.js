// Given a string, remove any characters that are unique from the string.

// Example:

// input: "abccdefee"

// output: "cceee"

// My solution: 
function onlyDuplicates(str) {
    return str.split('').filter((e, i, a) => a.indexOf(e) !== a.lastIndexOf(e)).join('')
}