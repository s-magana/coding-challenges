// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

// My solutions:
function removeUrlAnchor(url){
    return url.split('#')[0]
}

function removeUrlAnchor(url) {
    var index = url.indexOf("#");
    return index == -1 ? url : url.substring(0, index);
}