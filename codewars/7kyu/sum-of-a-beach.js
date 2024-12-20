// Beaches are filled with sand, water, fish, and sun. Given a string, calculate how many times the words "Sand", "Water", "Fish", and "Sun" appear without overlapping (regardless of the case).

// Examples
// sumOfABeach("WAtErSlIde")                    ==>  1
// sumOfABeach("GolDeNSanDyWateRyBeaChSuNN")    ==>  3
// sumOfABeach("gOfIshsunesunFiSh")             ==>  4 
// sumOfABeach("cItYTowNcARShoW")               ==>  0

// My solutions:
function sumOfABeach(beach) {
    return beach.split(/sand|water|fish|sun/ig).length - 1
}

const sumOfABeach = beach => 
    beach.split(/sand|water|fish|sun/gi).length - 1