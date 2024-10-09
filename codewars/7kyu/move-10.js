// Move every letter in the provided string forward 10 letters through the alphabet.

// If it goes past 'z', start again at 'a'.

// Input will be a string with length > 0.

// My solution:
function moveTen(s){
    let alphabet = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz'
    let arr = s.split('').map((e, i) => alphabet.indexOf(e) + 10)
    return arr.map(e => alphabet[e]).join('')
}