// Task

// The longest diagonals of a square matrix are defined as follows:

// the first longest diagonal goes from the top left corner to the bottom right one;
// the second longest diagonal goes from the top right corner to the bottom left one.
// Given a square matrix, your task is to swap its longest diagonals by exchanging their elements at the corresponding positions.

// Example

// For

// matrix = [[1, 2, 3],
//           [4, 5, 6],
//           [7, 8, 9]]
// the output should be

// [[3, 2, 1],
//  [4, 5, 6],
//  [9, 8, 7]]
// Input/Output

// [input] 2D integer array matrix

// Constraints: 1 ≤ matrix.length ≤ 10, matrix.length = matrix[i].length, 1 ≤ matrix[i][j] ≤ 1000.

// [output] 2D integer array

// Matrix with swapped diagonals.

// My solution: 
function swapDiagonals(matrix) {
  return matrix.map((e, i) => ([e[i], e[matrix.length - 1 - i]] = [e[matrix.length - 1 - i], e[i]], e))
}
