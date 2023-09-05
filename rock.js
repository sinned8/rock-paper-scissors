
function computerPlay(){
   let random = Math.floor(Math.random()*3);
   switch(random){
     case(0):
       return "Rock";
       break;
     case(1):
       return "Paper";
       break;
     default:
       return "Scissors";
   }
 }
 function playRound(playerSelection, computerSelection){
   
   switch(playerSelection.toLowerCase()){
     case("rock"):
       return (computerSelection.toLowerCase() == "scissors") ? "You win! Rock beats Scissors!"
             :(computerSelection.toLowerCase() == "paper") ? "You lose! Paper beats Rock!" 
             : "It's a tie!";
       break;
     
       case("paper"):
       return (computerSelection.toLowerCase() == "rock") ? "You win! Paper beats Rock!"
             :(computerSelection.toLowerCase() == "scissors") ? "You lose! Scissors beats Paper!" 
             : "It's a tie!";
       break;
     
       case("scissors"):
       return (computerSelection.toLowerCase() == "paper") ? "You win! Scissors beats paper!"
             :(computerSelection.toLowerCase() == "rock") ? "You lose! Rock beats scissors!" 
             : "It's a tie!";
       break;
     
       default:
       return "Something went wrong.";
   }
 }
 
 
 