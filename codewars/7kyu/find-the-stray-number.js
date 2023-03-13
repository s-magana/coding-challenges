// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

// My solutions: 
function stray(numbers) {
    let newArr = numbers.sort((a,b) => a - b)
    if (newArr[0] !== newArr[1]) {
      return newArr[0]
    } else {
      return newArr[newArr.length - 1]
    }
}

const stray = numbers => numbers.find(num => numbers.indexOf(num) === numbers.lastIndexOf(num));