// Write a function that, given a column title as it appears in an Excel sheet, returns its corresponding column number.

// All column titles will be uppercase.

// Examples:

// Column title: "A" --> return 1
// Column title: "Z" --> return 26
// Column title: "AA" --> return 27

// My solution: 
function titleToNumber(title) {
    return title.split('').reduce((acc, c) => acc * 26 + c.charCodeAt() - 64, 0)
}