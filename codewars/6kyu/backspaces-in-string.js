// Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

// Your task is to process a string with "#" symbols.

// Examples
// "abc#d##c"      ==>  "ac"
// "abc##d######"  ==>  ""
// "#######"       ==>  ""
// ""              ==>  ""

// My solution: 
function cleanString(str) {
    return str.split('').reduce((acc, c) => c === "#" ? acc.substr(0, acc.length - 1) : acc += c, '');
}

function cleanString(s) {
    let result = [];
    [...s].map((char) => (char === "#" ? result.pop() : result.push(char)));
    return result.join("");
}