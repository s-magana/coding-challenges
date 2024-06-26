// Write function alternateCase which switch every letter in string from upper to lower and from lower to upper. E.g: Hello World -> hELLO wORLD

// My solution: 
function alternateCase(s) {
    return s.split('').map(e => e === e.toUpperCase() ? e.toLowerCase() : e.toUpperCase()).join('')
}