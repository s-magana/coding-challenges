// You have two arrays in this kata, every array contains unique elements only. Your task is to calculate number of elements in the first array which are also present in the second array.

// My solution:
function matchArrays(v,r){
    return v.filter(e => r.includes(e)).length
}