// Given a mathematical equation that has *,+,-,/, reverse it as follows:

// solve("100*b/y") = "y/b*100"
// solve("a+b-c/d*30") = "30*d/c-b+a"
// More examples in test cases.

// Good luck!

// My solution:
function solve(eq){
  return eq.split(/([*+-/])/).reverse().join('')
}