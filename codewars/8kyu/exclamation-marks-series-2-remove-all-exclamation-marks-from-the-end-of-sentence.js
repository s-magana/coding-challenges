// Description:
// Remove all exclamation marks from the end of sentence.

// Examples
// "Hi!"     ---> "Hi"
// "Hi!!!"   ---> "Hi"
// "!Hi"     ---> "!Hi"
// "!Hi!"    ---> "!Hi"
// "Hi! Hi!" ---> "Hi! Hi"
// "Hi"      ---> "Hi"

// My solutions: 
function remove (string) {  
    string = string.split('')
    for(let i = 0; i <= string.length; i++) {
      if (string[string.length - 1] == "!")
        string.pop()
    }  
    return string.join('')
}

function remove(string){
    return string.charAt(string.length - 1) === '!' ? remove(string.slice(0, string.length - 1)) : string;
}