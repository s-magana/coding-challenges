// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

// My solutions:
function removeExclamationMarks(s) {
    return s.replaceAll('!', '')
}

function removeExclamationMarks(s) {
    return s.replace(/!/gi, '');
}