// Find the difference between two collections. The difference means that either the character is present in one collection or it is present in other, but not in both. Return a sorted list with the difference.

// The collections can contain any character and can contain duplicates.

// Example
// A = [a, a, t, e, f, i, j]

// B = [t, g, g, i, k, f]

// difference = [a, e, g, j, k]

// My solution:
function diff(a, b){
    let a2 = a.filter(e => !b.includes(e))
    let b2 = b.filter(f => !a.includes(f))
    return [...new Set(a2.concat(b2))].sort()
}