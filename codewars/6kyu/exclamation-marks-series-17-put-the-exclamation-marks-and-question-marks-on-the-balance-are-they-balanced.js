// Each exclamation mark's weight is 2; each question mark's weight is 3. Putting two strings left and right on the balance - are they balanced?

// If the left side is more heavy, return "Left"; if the right side is more heavy, return "Right"; if they are balanced, return "Balance".

// Examples
// "!!", "??"     -->  "Right"
// "!??", "?!!"   -->  "Left"
// "!?!!", "?!?"  -->  "Left"
// "!!???!????", "??!!?!!!!!!!"  -->  "Balance"

// My solutions: 
function balance(left,right){
    return getWeight(left) > getWeight(right) ? "Left" : getWeight(right) > getWeight(left) ? 'Right' : 'Balance'
}
function getWeight(str) {
    return str.split('').map(e => e === '!' ? 2 : 3).reduce((acc, c) => acc + c, 0) 
}

function balance(left,right) {
    const weight = str => [...str].map(e => e === '!' ? 2 : 3).reduce((acc, c) => acc + c, 0);
    let diff = weight(left) - weight(right);
    return diff === 0 ? 'Balance' : diff > 0 ? 'Left' : 'Right';
}