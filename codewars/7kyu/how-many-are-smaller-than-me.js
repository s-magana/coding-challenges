// Write a function that given, an array arr, returns an array containing at each index i the amount of numbers that are smaller than arr[i] to the right.

// For example:

// * Input [5, 4, 3, 2, 1] => Output [4, 3, 2, 1, 0]
// * Input [1, 2, 0] => Output [1, 1, 0]

// My solutions: 
function smaller(nums) {
    return nums.map((e,i,a) => {
      return a.slice(i).filter(f => f < e).length
    })
}

const smaller = nums => nums.map((x, i) => nums.slice(i).filter(y => x > y).length);