// Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

// Example:

// 'acb' --> 'bca'
// 'aabacbaa' --> 'bbabcabb'

// My solutions: 
function switcheroo(x) {
    return x.replace(/[ab]/g, element => element === 'a' ? 'b' : 'a')
}

function switcheroo(x) {
    return x.split('').map(e => {
      if (e == 'b') return 'a'
      if (e == 'a') return 'b'
      if(e == 'c') return 'c'
    }).join('');
}