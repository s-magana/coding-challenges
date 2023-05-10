// Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') between each two odd digits in num. For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd digit.

// Note that the number will always be non-negative (>= 0).

// My solution: 
function insertDash(num) {
    let result = []
    let arr = String(num).split('').map(Number)
    
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 !== 0 && arr[i + 1] % 2 !== 0) {
        result.push(arr[i])
        result.push('-')
      } else {
        result.push(arr[i])
      }
    }
    
    if(result[result.length - 1] === '-') {
      result.pop()
    }
    
    return result.join('')
}
  
function insertDash(num) {
    num = num.toString().split('')
   
    for(let i = 0; i < num.length; i++){
        if (num[i]%2 > 0 && num[i +1]%2 > 0) {
            num[i] = num[i] + '-'
        }
    }
    return num.join('')
   
}