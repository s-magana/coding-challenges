// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// My solution:
function capitalize(s){
    let arr = []
    let even = arr.push(s.split('').map((e, i) => i % 2 === 0 ? e.toUpperCase() : e).join(''))
    let odd = arr.push(s.split('').map((e, i) => i % 2 !== 0 ? e.toUpperCase() : e).join(''))
    return arr
};

function capitalize(s){
    const odd = s.split("").map((l, i) => i % 2 !== 0 ? l.toUpperCase() : l).join("");
    const even = s.split("").map((l, i) => i % 2 === 0 ? l.toUpperCase() : l).join("");
    return [even, odd];
};