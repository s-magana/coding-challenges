// Convert a hash into an array. Nothing more, Nothing less.

// {name: 'Jeremy', age: 24, role: 'Software Engineer'}
// should be converted into

// [["age", 24], ["name", "Jeremy"], ["role", "Software Engineer"]]

// My solutions: 
function convertHashToArray(hash){
    let key = Object.keys(hash)
    let value = Object.values(hash)
    let arr = []
    for (let i = 0; i < value.length; i++){
      arr.push([key[i], value[i]])
    }
    return arr.sort()
}

function convertHashToArray(hash){
    return Object.entries(hash).sort()
}