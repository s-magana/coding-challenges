// You are given an array of values.

// Sum every number value in the array, and any nested arrays (to any depth).

// Ignore all other types of values.

// My solution:
return arr.reduce((acc, c) => acc + (Array.isArray(c) ? arraySum(c) : isNaN(c) ? 0 : c), 0)