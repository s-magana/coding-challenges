// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

// My solutions:
var uniqueInOrder=function(iterable){
    return (typeof iterable === 'string') ? iterable.split('').filter((e,i,a) => a[i] !== a[i + 1]) : iterable.filter((e,i,a) => a[i] !== a[i + 1])
}

var uniqueInOrder = function(iterable) {
    var arr = [];
    for (var i=0;i<iterable.length;i++) {

    // check if there is back to back letter
    if (iterable[i] !== iterable[i+1]) {

        // if not, push the current value to arr
      arr.push(iterable[i]);
    }
  }
  return arr;
}