// You are writing a function that takes two sets of arguments of arbitrary length. The return value will be the sum of the values of all of the arguments.

// The function should contain at least 1 argument per set.

// calculate(1)(1) // should return 2
// calculate(1,1)(1) // should return 3
// calculate(1,1)(1,-1) // should return 2
// calculate(2,4)(3,7,1) // should return 17

// My solutions:
function calculate(...x) {
    return function (...y) {
      return [].concat(x, y).reduce((acc, c) => acc + c, 0)
    }
}

const calculate = (...args1) => (...args2) => [...args1, ...args2].reduce((acc, c) => acc + c, 0)