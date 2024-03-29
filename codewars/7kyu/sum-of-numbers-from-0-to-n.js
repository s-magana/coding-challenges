// Description:

// We want to generate a function that computes the series starting from 0 and ending until the given number.

// Example:
// Input:

// > 6
// Output:

// 0+1+2+3+4+5+6 = 21

// Input:

// > -15
// Output:

// -15<0

// Input:

// > 0
// Output:

// 0=0

// My solution: 
var SequenceSum = (function() {
    function SequenceSum() {}
  
    SequenceSum.showSequence = function(count) {
        let arr = []
        for(let i = 0; i <= count; i++) {
            arr.push(i)
        };
        let b = arr.reduce((acc, c) => acc + c, 0)
        let a = arr.join('+')
        if (count < 0) return `${count}<0`
        if (count == 0) return `${count}=0`
        return `${a} = ${b}`
    };
  
    return SequenceSum;
  
  })();