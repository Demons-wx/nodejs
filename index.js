var playerAction = process.argv[process.argv.length - 1]

var computerAction = 'rock'
var random = Math.random() * 3
if (random < 1) {
    computerAction = 'scissor'
} else if (random > 2) {
    computerAction = 'paper'
}
console.log(computerAction)

if (computerAction === playerAction) {
    console.log('平局')
} else if (
    (computerAction === 'rock' && playerAction === 'scissor') ||
    (computerAction === 'scissor' && playerAction === 'paper') ||
    (computerAction === 'paper' && playerAction === 'rock')
) {
    console.log('你输了')
} else {
    console.log('你赢了')
}
