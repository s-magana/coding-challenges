// Find the number with the most digits.

// If two numbers in the argument array have the same number of digits, return the first one in the array.

// My solutions: 
function findLongest(array) {
    return array.reduce((acc, c) => `${c}`.length > `${acc}`.length ? c : acc)
}

function findLongest(array){
    return array.reduce((res, curr) => (String(res).length < String(curr).length) ? curr : res);
}