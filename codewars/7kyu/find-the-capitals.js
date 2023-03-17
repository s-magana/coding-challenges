// Instructions
// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

// Example
// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

// My solution:
var capitals = function (word) {
    let indexArray = []
    let wordArray = word.split('').map((e, i) => {
      if (e.match(/[A-Z]/)) {
        indexArray.push(i)
      }
    })
    return indexArray
};

var capitals = function (word) {
    var caps = [];
      for(var i = 0; i < word.length; i++) {
      if(word[i].toUpperCase() == word[i]) caps.push(i);
    }
    return caps;
};