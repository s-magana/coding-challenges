// Find the last element of the given argument(s).

// Examples
// last([1, 2, 3, 4] ) // =>  4
// last("xyz")         // => "z"
// last(1, 2, 3, 4)    // =>  4
// In javascript and CoffeeScript a list will be an array, a string or the list of arguments.

// My solution:
function last(list){
    let last_arg = arguments[arguments.length - 1]
    let last_element = last_arg[last_arg.length - 1] || last_arg
    return last_element
}