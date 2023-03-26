// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// For example, the score of abad is 8 (1 + 2 + 1 + 4).

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

// My solution:
function high(x){
    let wordList = x.split(' ')
    
    const getScore = (word) => {
      return word.split('').reduce((prevScore, currWord) => prevScore + currWord.charCodeAt(0) - 96, 0)
    }
    const scoreList = wordList.map(word => getScore(word));
  
    let highestIndex = 0;
    let highestScore = 0;
    scoreList.forEach((score, i) => {
      if (score > highestScore) {
        highestIndex = i;
        highestScore = score;
      }
    });
    
    return wordList[highestIndex];
}