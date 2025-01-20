// Create a function that takes a string and returns that string with the first half lowercased and the last half uppercased.

// eg: foobar == fooBAR

// If it is an odd number then 'round' it up to find which letters to uppercase. See example below.

// sillycase("brian")  
// //         --^-- midpoint  
// //         bri    first half (lower-cased)  
// //            AN second half (upper-cased)

// My solution: 
function sillycase(silly) {
    let half = Math.ceil(silly.length / 2)
    let lower = silly.slice(0, half).toLowerCase()
    let upper = silly.slice(half).toUpperCase()
    return lower + upper
}