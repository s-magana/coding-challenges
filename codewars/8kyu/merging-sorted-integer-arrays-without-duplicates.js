// Write a function that merges two sorted arrays into a single one. The arrays only contain integers. Also, the final outcome must be sorted and not have any duplicate.

// My solutions: 
function mergeArrays(a, b) {
    let set = new Set(a.concat(b))
    return Array.from(set).sort((a, b) => a - b)
}

function mergeArrays(a, b) {
    return [...new Set(a.concat(b))].sort((a, b) => a - b)
}