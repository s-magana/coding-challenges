// When provided with a letter, return its position in the alphabet.

// Input :: "a"

// Ouput :: "Position of alphabet: 1"

// My solution: 
function position(letter){
    let alphabet = ' abcdefghijklmnopqrstuvwxyz'
    return `Position of alphabet: ${alphabet.split('').indexOf(letter)}`
}