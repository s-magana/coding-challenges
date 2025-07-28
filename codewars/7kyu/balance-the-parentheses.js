// Your job is to fix the parentheses so that all opening and closing parentheses (brackets) have matching counterparts. You will do this by appending parenthesis to the beginning or end of the string. The result should be of minimum length. Don't add unnecessary parenthesis.

// The input will be a string of varying length, only containing '(' and/or ')'.

// For example:

// Input: ")("
// Output: "()()"

// Input: "))))(()("
// Output: "(((())))(()())"
// Enjoy!

// My solution:
function fixParentheses(str) {
  let left = 0
  let right = 0
  str.split('').map(e => e === '(' ? right++ : right === 0 ? left++ : right--)
  
  return '('.repeat(left) + str + ')'.repeat(right);
}