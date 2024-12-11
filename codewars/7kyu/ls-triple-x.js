// Given a string, return true if the first instance of "x" in the string is immediately followed by the string "xx".

// "abraxxxas" → true
// "xoxotrololololololoxxx" → false
// "softX kitty, warm kitty, xxxxx" → true
// "softx kitty, warm kitty, xxxxx" → false
// Note :

// capital X's do not count as an occurrence of "x".
// if there are no "x"'s then return false

// My solutions: 
function tripleX(str){
    return /^[^x]*xxx/.test(str)
}

const tripleX = str => { 
    let x = str.indexOf('x')
    return x > -1 && x === str.indexOf('xxx') 
}