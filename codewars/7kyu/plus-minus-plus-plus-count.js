// Count how often sign changes in array.

// result
// number from 0 to ... . Empty array returns 0

// example
// const arr = [1, -3, -4, 0, 5];

// /*
// | elem | count |
// |------|-------|
// |  1   |  0    |
// | -3   |  1    |
// | -4   |  1    |
// |  0   |  2    |
// |  5   |  2    |
// */

// catchSignChange(arr) == 2;

// My solution:
function catchSignChange(arr) {
    let count = 0
    let arr2 = arr.map((e, i, a) => (e >=0 && a[i + 1] < 0) || (e < 0 && a[i + 1] >= 0) ? count++ : count)
    return count
}