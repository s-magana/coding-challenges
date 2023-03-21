// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

// My solution: 
function solution(string) {
    let newString = ''
    for (letter of string) {
      if (letter === letter.toUpperCase()) {
        newString += ' '
        newString += letter
      } else {
        newString += letter
      }
    }
    return newString
}

function solution(string) {
    string = string.split('').map((letter) => {
      if (letter === letter.toUpperCase()) {
        letter = ' ' + letter
      }
      return letter
    })
    return string.join('')
}