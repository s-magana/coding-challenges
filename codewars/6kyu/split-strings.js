// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

// My solutions: 
function solution(str){
    let newArr = []
    
    let arr = str.split('')
    
    if (arr.length % 2 !== 0) {
        arr.push('_')
    }
    
    for (let i = 0; i < arr.length; i += 2) {
      newArr.push(arr[i] + arr[i+1])
    }
    
    return newArr
}

function solution(str){
    let arr = []

    if (str.length % 2 !== 0) {
      str = str + '_'
    }

    for (let i = 0; i < str.length; i += 2) {
        arr.push(str[i] + str[i + 1])
    }

    return arr
}