// Given a string, you progressively need to concatenate the first character from the left and the first character from the right and "1", then the second character from the left and the second character from the right and "2", and so on.

// If the string's length is odd drop the central element.

// For example:

// charConcat("abcdef")    == 'af1be2cd3'
// charConcat("abc!def")   == 'af1be2cd3' // same result

// My solution:
function charConcat(string){
    let result = ''
    for (let i = 1; i <= string.length / 2; i++) {
      result += string[i - 1] + string[string.length - i] + i
    }
    return result
}