// Given a time in -hour AM/PM format, convert it to military (24-hour) time.

// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

// Example


// Return '12:01:00'.


// Return '00:01:00'.

// Function Description

// Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.

// timeConversion has the following parameter(s):

// string s: a time in  hour format
// Returns

// string: the time in  hour format
// Input Format

// A single string  that represents a time in -hour clock format (i.e.:  or ).

// Constraints

// All input times are valid
// Sample Input

// 07:05:45PM
// Sample Output

// 19:05:45

// Solution: 
/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    // Write your code here
    let ampm = s.slice(-2)
    let hours = parseInt(s.slice(0, 2))
    let minutesSeconds = s.slice(2, 8)
    
    if (ampm === 'PM' && hours !== 12){
        hours += 12
    }
    if (ampm === 'AM' && hours === 12) {
        hours = 0
    }
    let formattedHours = String(hours).padStart(2, '0')
    return `${formattedHours}${minutesSeconds}`
}