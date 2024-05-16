// Given a string, write a function that returns the string with a question mark ("?") appends to the end, unless the original string ends with a question mark, in which case, returns the original string.

// For example (Input --> Output)

// "Yes" --> "Yes?" 
// "No?" --> "No?"

// My solutions: 
function ensureQuestion(s) {
    return s.charAt(s.length - 1) === '?' ? s : s + '?'
}

const ensureQuestion = s => s.endsWith('?') ? s : s + '?'