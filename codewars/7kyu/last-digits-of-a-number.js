// Your job is to implement a function which returns the last D digits of an integer N as a list.

// Special cases:
// If D > (the number of digits of N), return all the digits.
// If D <= 0, return an empty list.
// Examples:
// N = 1
// D = 1
// result = [1]

// N = 1234
// D = 2
// result = [3, 4]

// N = 637547
// D = 6
// result = [6, 3, 7, 5, 4, 7]

// My solutions:
function lastDigit(n, d) {
    if (d <= 0) return []
    if (d > n) return Array.from(n.toString()).map(e => Number(e))
    return Array.from(n.toString()).slice(-d).map(e => Number(e))
}

const lastDigit = (n, d) =>
	d > 0 ? [...String(n).slice(-d)].map(Number) : [];