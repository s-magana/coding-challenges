// Description:
// Move all exclamation marks to the end of the sentence

// Examples
// "Hi!"          ---> "Hi!"
// "Hi! Hi!"      ---> "Hi Hi!!"
// "Hi! Hi! Hi!"  ---> "Hi Hi Hi!!!"
// "Hi! !Hi Hi!"  ---> "Hi Hi Hi!!!"
// "Hi! Hi!! Hi!" ---> "Hi Hi Hi!!!!"

// My solutions:
function remove (string) {
    let exclamations = string.split('').filter(e => e === '!').length
    return string.replaceAll('!' , '') + ('!').repeat(exclamations)
}

function remove(string) {
    return string.replaceAll('!', '').padEnd(string.length, '!')
}

function remove(string) {
    return string.replace(/!/g, '') + string.replace(/[^!]/g, '')
}