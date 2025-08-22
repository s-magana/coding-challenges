// *** No Loops Allowed ***

// You will be given an array and a limit value, you must check that all values in the array are less than or equal to limit. If they all are, return true. Else, return false.

// You can assume all values in the array are numbers.

// Do not use loops. Do not modify input array.

// My solution: 
function smallEnough(a, limit){
  return a.every(e => e <= limit)
}