// Implement the function which should return true if given object is a vowel (meaning a, e, i, o, u, uppercase or lowercase), and false otherwise.

// My solution: 
String.prototype.vowel = function() {
    return /^[aeiou]$/i.test(this)
}