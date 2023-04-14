// When provided with a String, capitalize all vowels

// For example:

// Input : "Hello World!"

// Output : "HEllO WOrld!"

// Note: Y is not a vowel in this kata.

// My solution:
function swap (string) {
    return string.split('').map(e => e.match(/[aeiou]/) ? e.toUpperCase() : e).join('')
}

function swap(string){
    return string.replace(/[aeiou]/g, v => v.toUpperCase() )
}