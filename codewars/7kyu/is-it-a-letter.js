// Write a function, isItLetter or is_it_letter or IsItLetter, which tells us if a given character is a letter or not.

// My solution: 
function isItLetter(character) {
    return /[A-Za-z]/.test(character)
}