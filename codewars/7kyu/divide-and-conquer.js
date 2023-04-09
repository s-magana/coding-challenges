// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

// Return as a number.

// My solutions:
function divCon(x){
    let intSum = 0
    let strSum = 0
    
    let int = x.map(e => {
      if (e === Number(e)) {
        intSum += e
      }
    })
    
    let str = x.map(e => {
      if (e === String(e)) {
        strSum += Number(e)
      }
    })
    
    return intSum - strSum
}

function divCon(x){
    return x.reduce((acc, cur) => typeof cur === 'number'? acc + cur : acc - Number(cur),0)
}