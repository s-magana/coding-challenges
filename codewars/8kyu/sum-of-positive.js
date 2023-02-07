// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

// My solutions:
function positiveSum(arr) {
    var total = 0;    
    for (i = 0; i < arr.length; i++) {
      if (arr[i] > 0) {
        total += arr[i];
      }
    }
    return total;
}

function positiveSum (arr) {
    return arr.filter(x => x >= 0).reduce((a, c) => a + c, 0);
}