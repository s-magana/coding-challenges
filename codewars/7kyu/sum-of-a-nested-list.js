// Implement a function to calculate the sum of the numerical values in a nested list. For example :

// sumNested([1, [2, [3, [4]]]]) => 10

// My solutions: 
const sumNested = arr =>
    arr.reduce((acc, c) => acc + (Array.isArray(c) ? sumNested(c) : c), 0)

const sumsNested = arr => 
    arr.flat(Infinity).reduce((acc, c) => acc + c, 0)