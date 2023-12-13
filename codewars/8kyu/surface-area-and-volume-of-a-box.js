// Write a function that returns the total surface area and volume of a box as an array: [area, volume]

// My solution: 
function getSize(width, height, depth) {
    let area = 2 * (width * height) + 2 * (width * depth) + 2 * (depth * height)
    let volume = width * height * depth
    return [area, volume]
}