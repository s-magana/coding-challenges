// Description:
// Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

// Examples
// replace("Hi!") === "H!!"
// replace("!Hi! Hi!") === "!H!! H!!"
// replace("aeiou") === "!!!!!"
// replace("ABCDE") === "!BCD!"

// My solutions: 
function replace(s){
    return s.replace(/[aeiouAEIOU]/ig, '!')
}

function replace(s){
    return s.replace(/[aeiouAEIOU]/g,'!')
}

function replace(s){
    return s.replace(/[aeoiu]/ig, '!')  
}