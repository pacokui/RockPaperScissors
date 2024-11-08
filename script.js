//console.log("Hello World!")

function getComputerChoice(){
   const randomNumber = Math.random();
   if (randomNumber < 0.33){
    return "Rock";
   } else if (randomNumber < 0.66) {
    return "Scissors";
   }
   else {
    return "Paper";
   }
    
}
//console.log(getComputerChoice());

function getHumanChoice(){
    let choice = prompt("Choose: Rock, Paper, Scissors?");
    return choice.charAt(0).toUpperCase() + choice.slice(1).toLowerCase();

}

function playGame(){
    
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice){
        return "It's a tie, another round!";
    } else if (
        (humanChoice === "rock" && computerChoice === "Scissors" ) ||
        (humanChoice === "paper" && computerChoice === "Rock") ||
        (humanChoice === "scissors" && computerChoice === "Paper") 
    ) {
        
        return "You win!";
    } else {
        
        return "You lose!";
    } 
}
for ( let i = 0; i < 5; i++) {

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    console.log(`Round ${i + 1}:`);
    console.log(`You chose ${humanSelection}`);
    console.log(`Computer chose ${computerSelection}`);

    const roundResult = playRound(humanSelection, computerSelection);
    console.log(roundResult);

    if (roundResult === "You win!") {
        humanScore++;
    } else if (roundResult == "You lose!") {
        computerScore++;
    }
    console.log(`Current score: You ${humanScore}, Computer : ${computerScore}`);

}
console.log("Game over!");
if (humanScore > computerScore) {
    console.log("You are the winner!");

} else if (computerScore > humanScore) {
    console.log("Computer is the winner")
} else {
    console.log("It's a tie")
}

}
playGame();
