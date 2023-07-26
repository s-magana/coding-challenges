// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

// Examples
// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"
// don't worry about uppercase vowels
// y is not considered a vowel for this kata

// My solutions: 
function shortcut (string) {
    return string.replace(/[aeiou]/ig, '')
}

function shortcut (string) {
    return string.split('').filter(e => !'aeiou'.includes(e)).join('')
}