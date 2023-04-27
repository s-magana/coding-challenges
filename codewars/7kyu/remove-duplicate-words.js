// Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

// Example:

// Input:

// 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

// Output:

// 'alpha beta gamma delta'

// My solutions:
function removeDuplicateWords (s) {
    let set = new Set(s.split(' '))
    return Array.from(set).join(' ')
}

function removeDuplicateWords (s) {
    return s.split(' ').filter((e,i,a) => e !== a[i + 1]).join(' ')
}