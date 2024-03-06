// For a given string s find the character c (or C) with longest consecutive repetition and return:

// [c, l]
// where l (or L) is the length of the repetition. If there are two or more characters with the same l return the first in order of appearance.

// For empty string return:

// ["", 0]

// My solution: 
function longestRepetition(s) {
    let longestRep = 0;
    let longestChar = '';
    let repetition = 1;
    let currentChar = '';
    
    for (let i = 0; i < s.length; i++){
      currentChar = s[i];
      if (s[i + 1] === currentChar) repetition++;
      else {
        if (repetition > longestRep) {
          longestRep = repetition;
          longestChar = currentChar;
        }
        repetition = 1;
      }
    }
    return [longestChar, longestRep]
}