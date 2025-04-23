// Build up a method that takes an integer and formats it to a 'time - like' format.

// The method must raise an exception if its hour length is less than 3 digits and greater than 4.

// Example:
// solution(800); // should return '8:00'
// solution(1000); // should return '10:00'
// solution(1451); // should return '14:51'
// solution(3351); // should return '33:51'
// solution(10000); // should raise an exception

// My solutions: 
function solution(hour) {
    hour = hour.toString()
    if (hour.length === 3) {
      return hour.slice(0, 1) + ':' + hour.slice(-2)
    } else if (hour.length === 4) {
      return hour.slice(0, 2) + ':' + hour.slice(-2)
    } else {
      throw new Error()
    }
}

function solution(hour) {
    hour = hour + '';
    if (hour.length < 3 || hour.length > 4) {
        throw new Error()
    }
    return hour.slice(0, -2) + ':' + hour.slice(-2);
}