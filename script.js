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
console.log(getComputerChoice());

function getHumanChoice(){
    let choice = prompt("Choose: Rock, Paper, Scissors?");

}
console.log(getHumanChoice())

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