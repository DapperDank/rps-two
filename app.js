//Receiving user input, changing the user input string to lower case
function playerPlay() {
    let playerPlay = prompt('Enter Rock, Paper or Scissors Please')
    playerPlay = playerPlay.toLowerCase
    if (playerPlay !== 'rock' || 'paper' || 'scissors') {
        console.log(playerPlay)
        return playerPlay
    } else {
        console.log('Reenter your input.')
    }
}
//Generating a random number to decide what option the computer with choose. Checking the random number in a if statement and assigning a value to computer input
function computerPlay() {
    let randomNumber = Math.floor(Math.random() * 3 + 1)

    if (randomNumber == 1) {
        const computerPlay = 'rock'
        return computerPlay
    }
    if (randomNumber == 2) {
        const computerPlay = 'paper'
        return computerPlay
    }
    if (randomNumber == 3) {
        const computerPlay = 'scissors'
        return computerPlay
    } else {
        console.log('Something went wrong! Please refresh the browser')
    }
}
// Comparing the player and computer random selection, then producing an result of which "player" won.
function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'rock') {
        if (computerSelection == 'rock') {
            console.log("It's a tie")
            return
        } else if (computerSelection == 'paper') {
            console.log('You lose, try again?')
            return
        } else if (computerSelection == 'scissors') {
            console.log("You're a winner!")
            return
        }
    }
    if (playerSelection == 'paper') {
        if (computerSelection == 'paper') {
            console.log("It's a tie")
            return
        } else if (computerSelection == 'scissors') {
            console.log('You lose, try again?')
            return
        } else if (computerSelection == 'rock') {
            console.log("You're a winner!")
            return
        }
    }
    if (playerSelection == 'scissors') {
        if (computerSelection == 'scissors') {
            console.log("It's a tie")
            return
        } else if (computerSelection == 'rock') {
            console.log('You lose, try again?')
            return
        } else if (computerSelection == 'paper') {
            console.log("You're a winner!")
            return
        }
    } else {
        console.log('Something went wrong!')
    }
}

const computerSelection = computerPlay()
const playerSelection = playerPlay()
console.log(playRound(playerSelection, computerSelection))
console.log(computerSelection, playerSelection)
console.log(randomNumber)