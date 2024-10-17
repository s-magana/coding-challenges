// Given a string of space separated words, return the longest word.
// If there are multiple longest words, return the rightmost longest word.

// Examples
// "red white blue"  =>  "white"
// "red blue gold"   =>  "gold"

// My solutions: 
function longestWord(stringOfWords) {
    return stringOfWords.split(' ').sort((a, b) => a.length - b.length).slice(-1)[0]
}

let longestWord = s => s.split(' ').reduceRight((a,b)=>(b.length>a.length) ? b : a);

function longestWord(str){
    return str.split(' ').sort((b, a) => b.length - a.length).pop();
}