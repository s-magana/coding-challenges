// Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.

// My solution: 
function cubeOdd(arr) {
    let odd = []
    let cubed = arr.map(e => Math.pow(e, 3))
    for (let i = 0; i < arr.length; i++) {
      if (arr.filter(f => typeof(f) === 'number').length === arr.length) {
        for (let i = 0; i < cubed.length; i++) {
          if (cubed[i] % 2 !== 0) {
            odd.push(cubed[i])
          } 
        }
        return odd.reduce((acc,c) => acc + c, 0)
        }
        else {
        return undefined
        }
    }
}

const cubeOdd = a => {
    let isNumeric = a.every(x => !isNaN(x))
    return isNumeric ? a.filter(n => n % 2).reduce((s,n) => s + (n*n*n),0) : undefined
}