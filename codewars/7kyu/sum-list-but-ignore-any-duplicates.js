// Please write a function that sums a list, but ignores any duplicated items in the list.

// For instance, for the list [3, 4, 3, 6] the function should return 10,
// and for the list [1, 10, 3, 10, 10] the function should return 4.

// My solution:
function sumNoDuplicates(numList) {
    return numList.filter((e, i, arr) => arr.indexOf(e) === arr.lastIndexOf(e)).reduce((acc, c) => acc + c, 0)
}