// Karan's company makes software that provides different features based on the version of operating system of the user.

// To compare versions, Karan currently parses both version numbers as floats.

// While this worked for OS versions 10.6, 10.7, 10.8 and 10.9, the operating system company just released OS version 10.10. This causes his method to fail, as 10.9 is greater than 10.10 when interpreting both as numbers, despite being a lesser version.

// Help Karan by writing him a function which compares two versions, and returns whether or not the first one is greater than or equal to the second.

// Specification notes:

// Versions are provided as strings of one or more integers separated by ..
// The version strings will never be empty.
// The two versions are not guaranteed to have an equal amount of sub-versions, when this happens assume that all missing sub-versions are zero.
// Two versions which differ only by trailing zero sub-versions will never be given.

// My solution: 
function compareVersions(version1, version2) {
    let arr1 = version1.split('.').map(Number)
    let arr2 = version2.split('.').map(Number)
    let maxLength = Math.max(arr1.length, arr2.length)

    for (let i = 0; i < maxLength; i++) {
        if ((arr1[i] || 0) === (arr2[i] || 0)) continue
        if ((arr1[i] || 0) > (arr2[i] || 0)) return true 
        else return false
    }
    return true
}