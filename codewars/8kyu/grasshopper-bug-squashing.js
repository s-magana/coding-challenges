// Terminal game bug squashing
// You are creating a text-based terminal version of your favorite board game. In the board game, each turn has six steps that must happen in this order: roll the dice, move, combat, get coins, buy health, and print status.

// You are using a library that already has the functions below. Create a function named main (PlayTurn for C#) that calls the functions in the proper order stated before.

// - combat
// - buyHealth
// - getCoins
// - printStatus
// - rollDice
// - move
// Note: this list only mentions the methods' names, not the order in which they should be called. For the order, refer to the first paragraph.

// My solution: 
var health = 100
var position = 0
var coins = 0

function main () {
  rollDice()
  move()
  combat()
  getCoins()
  buyHealth()
  printStatus()
}