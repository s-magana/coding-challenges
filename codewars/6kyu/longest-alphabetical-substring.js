// Find the longest substring in alphabetical order.

// Example: the longest alphabetical substring in "asdfaaaabbbbcttavvfffffdf" is "aaaabbbbctt".

// There are tests with strings up to 10 000 characters long so your code will need to be efficient.

// The input will only consist of lowercase characters and will be at least one letter long.

// If there are multiple solutions, return the one that appears first.

// Good luck :)

// My solution:
function longest(str) {
    let subStr = str[0]
    let current = str[0]
    for (let i = 1; i < str.length; i++) {
      str[i] >= str[i - 1] ? current += str[i] : current = str[i]
      if (current.length > subStr.length) subStr = current
    }
    return subStr
}