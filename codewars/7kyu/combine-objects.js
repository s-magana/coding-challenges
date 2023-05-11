// Your task is to write a function that takes two or more objects and returns a new object which combines all the input objects.

// All input object properties will have only numeric values. Objects are combined together so that the values of matching keys are added together.

// An example:

// const objA = { a: 10, b: 20, c: 30 }
// const objB = { a: 3, c: 6, d: 3 }
// combine(objA, objB) // Returns { a: 13, b: 20, c: 36, d: 3 }
// The combine function should be a good citizen, so should not mutate the input objects.

// My solution:
function combine() {
    let argsArr = [...arguments]
    let comboObj = {}
    
    for (let i = 0; i < arguments.length; i++) {
      for (let key in arguments[i]) {
        if (!comboObj[key]) {
          comboObj[key] = arguments[i][key]
        } else {
          comboObj[key] += arguments[i][key]
        }
      }
    }
    return comboObj
}

const combine = (...params) => params.reduce((a, b) => {
    for (const x in b) { a[x] = x in a ? a[x] + b[x] : b[x] };
    return a;
}, {});

function combine() {
    var obj = {}
  
    for (var i = 0; i < arguments.length; i++) {
          for (var key in arguments[i]) {
            obj[key] = obj[key] ? obj[key] + arguments[i][key]: arguments[i][key]
          }
    }
  
    return obj;
}