// Complete the code which should return true if the given object is a single ASCII letter (lower or upper case), false otherwise.

// My solutions: 
String.prototype.isLetter = function() {
    if (this.length !== 1) return false
    if (this.match(/[a-zA-Z]/))return true
    return false
}

String.prototype.isLetter = function() {
    return /^[A-Za-z]$/.test(this)
}

String.prototype.isLetter = function() {
    return /^[a-z]$/i.test(this)
}