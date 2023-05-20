// Modify the kebabize function so that it converts a camel case string into a kebab case.

// "camelsHaveThreeHumps"  -->  "camels-have-three-humps"
// "camelsHave3Humps"  -->  "camels-have-humps"
// "CAMEL"  -->  "c-a-m-e-l"
// Notes:

// the returned string should only contain lowercase letters

// My solution: 
function kebabize(str) {
    return str.split('').filter(e => e.match(/[A-Z, a-z]/)).map((e,i,a) => {
      return e.match(/[A-Z]/) ? `${i === 0 ? '' : '-'}${e.toLowerCase()}` : e
    }).join('')
}