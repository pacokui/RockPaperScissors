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