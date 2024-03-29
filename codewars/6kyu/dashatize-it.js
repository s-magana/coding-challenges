// Given a variable n,

// If n is an integer, Return a string with dash'-'marks before and after each odd integer, but do not begin or end the string with a dash mark. If n is negative, then the negative sign should be removed.

// If n is not an integer, return the string "NaN".

// Ex:

// dashatize(274) -> '2-7-4'
// dashatize(6815) -> '68-1-5'

// My solution: 
function dashatize(num) {
    if (Number.isNaN(num)) {
      return "NaN"
    }
    
    return String(Math.abs(num)).split('').map((e,i,a) => {
      return i === 0 ? e : ((e % 2 !== 0) || (a[i - 1] % 2 !== 0) ? `-${e}` : e)
    }).join('')
}