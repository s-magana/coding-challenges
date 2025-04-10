// Given a list of integers values, your job is to return the sum of the values; however, if the same integer value appears multiple times in the list, you can only count it once in your sum.

// For example:

// [ 1, 2, 3] ==> 6

// [ 1, 3, 8, 1, 8] ==> 12

// [ -1, -1, 5, 2, -7] ==> -1

// [] ==> null
// Good Luck!

// My solution: 
function uniqueSum(lst){
    return lst.length === 0 ? null : [...new Set(lst)].reduce((acc, c) => acc + c, 0)
}