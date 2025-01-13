// Introduction
// You are the developer working on a website which features a large counter on its homepage, proudly displaying the number of happy customers who have downloaded your companies software.

// You have been tasked with adding an effect to this counter to make it more interesting.

// Instead of just displaying the count value immediatley when the page loads, we want to create the effect of each digit cycling through its preceding numbers before stopping on the actual value.

// Task
// As a step towards achieving this; you have decided to create a function that will produce a multi-dimensional array out of the hit count value. Each inner dimension of the array represents an individual digit in the hit count, and will include all numbers that come before it, going back to 0.

// Rules
// The function will take one argument which will be a four character string representing hit count
// The function must return a multi-dimensional array containing four inner arrays
// The final value in each inner array must be the actual value to be displayed
// Values returned in the array must be of the type number
// Examples

// counterEffect("1250") // [[0,1],[0,1,2],[0,1,2,3,4,5],[0]] 
// counterEffect("0050") // [[0],[0],[0,1,2,3,4,5],[0]] 
// counterEffect("0000") // [[0],[0],[0],[0]]

// My solutions:
function counterEffect(hitCount) {
    let arr0 = hitCount.split('')
    let arr1 = [] 
    let arr2 = []
    let arr3 = []
    let arr4 = []
    for(let i = 0; i <= arr0[0]; i++)
    {arr1.push(i)}
    for(let i = 0; i <= arr0[1]; i++)
    {arr2.push(i)}
    for(let i = 0; i <= arr0[2]; i++)
    {arr3.push(i)}
    for(let i = 0; i <= arr0[3]; i++)
    {arr4.push(i)}
    return [arr1, arr2, arr3, arr4]
}

function counterEffect(hitCount) {
	let result = []
	for (let i = 0; i < hitCount.length; i++) {
		let temp = []
		for (let j = 0; j <= Number(hitCount[i]); j++) {
			temp.push(j)
		} result.push(temp)
	} return result
}