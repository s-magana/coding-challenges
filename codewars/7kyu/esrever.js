// Write a function reverse which reverses a list (or in clojure's case, any list-like data structure)

// (the dedicated builtin(s) functionalities are deactivated)

// My solution:
reverse = function(array) {
    let newArr = []
    for (let i = array.length - 1; i >= 0; i--) {
        newArr.push(array[i])
    }
    return newArr
}

reverse = function(array) {
    return array.reduce((a, b) => [b].concat(a), []);
}