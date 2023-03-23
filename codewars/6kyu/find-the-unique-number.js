// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

// My solution:
function findUniq(arr) {
    let sortedArr = arr.sort((a,b) => a - b)
    for (let i = 0; i < sortedArr.length; i++) {
      if (sortedArr[0] === sortedArr[1]) {
        return sortedArr[sortedArr.length - 1]
      } else {
        return sortedArr[0]
      }
    }
}

function findUniq(arr) {
    arr.sort((a,b) => a - b);
    return arr[0]==arr[1]?arr.pop():arr[0]
}

function findUniq(arr) {
    return arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n));
}