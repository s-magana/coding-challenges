// Write a function that adds from two invocations.

// All inputs will be integers.

// add(3)(4)  // 7
// add(12)(20) // 32

// My solution: 
function add(a) {
    return (b) => {
      return a + b
    }
}

const add = a => b => a + b