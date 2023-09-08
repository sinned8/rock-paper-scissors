

let computerSelection = computerPlay();

function computerPlay(){
  let randomNumber = Math.round(Math.random() * 2)
  const list = ["rock", "paper", "scissors"];
  randomChoice = list[randomNumber];
  return randomChoice;
 }


 let playerSelection = '';
 
   console.log(computerSelection);

   document.querySelector('#rock').addEventListener('click', event =>{
    playerSelection = 'rock'
    result();
    console.log(playerSelection,result());
   })
   
   document.querySelector('#paper').addEventListener('click', event =>{
    playerSelection = 'paper'
    result();
    console.log(playerSelection,result());
   })

   document.querySelector('#scissors').addEventListener('click', event =>{
    playerSelection = 'scissors'
    result();
    console.log(playerSelection,result());
   })


const resultClass = document.querySelector('.resultClass');
   function result() {
    
    if (playerSelection  === computerSelection) {
      
      resultClass.textContent = `You chose ${playerSelection} and the CPU chose ${computerSelection}, thus its a tie!`;
    } 
    else if (playerSelection  === 'rock' && computerSelection === 'paper'){
     
      resultClass.textContent = `You chose ${playerSelection} and the CPU chose ${computerSelection}, thus CPU wins!`;    
    } 
    else if (playerSelection  === 'paper' && computerSelection === 'scissors'){
      
      resultClass.textContent = `You chose ${playerSelection} and the CPU chose ${computerSelection}, thus CPU wins!`;     
    } 
    else if (playerSelection  === 'scissors' && computerSelection === 'rock'){
      
      resultClass.textContent = `You chose ${playerSelection} and the CPU chose ${computerSelection}, thus CPU wins!`;     
    } 
    else{
      
      resultClass.textContent = `You chose ${playerSelection} and the CPU chose ${computerSelection}, thus you win!`;     
    }  
  }



//  function playRound(playerSelection, computerSelection){
   
//    switch(playerSelection.toLowerCase()){
//      case("rock"):
//        return (computerSelection.toLowerCase() == "scissors") ? "You win! Rock beats Scissors!"
//              :(computerSelection.toLowerCase() == "paper") ? "You lose! Paper beats Rock!" 
//              : "It's a tie!";
//        break; 
     
//        case("paper"):
//        return (computerSelection.toLowerCase() == "rock") ? "You win! Paper beats Rock!"
//              :(computerSelection.toLowerCase() == "scissors") ? "You lose! Scissors beats Paper!" 
//              : "It's a tie!";
//        break;
     
//        case("scissors"):
//        return (computerSelection.toLowerCase() == "paper") ? "You win! Scissors beats paper!"
//              :(computerSelection.toLowerCase() == "rock") ? "You lose! Rock beats scissors!" 
//              : "It's a tie!";
//        break;
     
//        default:
//        return "Something went wrong.";
//    }
//  }
 


// let result = playRound(playerSelection, computerPlay());

































//  delete game function move buttons outside and have it run playround function. read step 2 part2
//  function game(){
//    let i;
//    let userScore = 0;
//    let computerScore = 0;
    
//    let playerSelection = '';
//    let result = playRound(playerSelection, computerPlay());
   
//    document.querySelector('#rock').onclick = function(){
//     playerSelection = 'rock';
//     result;
//     console.log('rock');
//    }
//    document.querySelector('#paper').onclick = function(){
//     playerSelection = 'paper';
//     result;
//     console.log('paper');
//    }
//    document.querySelector('#scissors').onclick = function(){
//     playerSelection = 'scissors';
//     result;
//     console.log('scissors');
//    }
   
   
    
    
   // let playerSelection = prompt("Choose Rock, Paper, or Scissors.");
    
   
   
  //  if(result.indexOf("win") !== -1){
  //   userScore++;
  //   console.log(`The user won Round ${i+1}.`);
  // }

  // else if(result.indexOf("lose") !== -1){ 
  //   computerScore++;  
  //   console.log(`The CPU won Round ${i+1}.`);
  // }
    
  // else if(result.indexOf("tie") !== -1){ 
  //   console.log(`Round ${i+1} was a tie.`);
  // } 
  
  // else{ 
  //   console.error("Incorrect input."); 
  //   alert("Incorrect input(s).Please try either Rock Paper or Scissors.")
  //   i--; 
  // }

   
   
   
  //  let ties = 5-userScore-computerScore;
  //  let grammar = (ties != 1) ? "games" : "game";
   
  //  if(userScore>computerScore){
  //    console.log(`The user wins ${userScore} to ${computerScore}, with ${ties} tied ${grammar}!`);
  //  }
  //  else if(computerScore>userScore){
  //    console.log(`The computer wins ${computerScore} to ${userScore}, with ${ties} tied ${grammar}!`);
  //  }
  //  else{
  //    console.log(`It's a tie! Both players had a score of ${userScore}, with ${ties} tied ${grammar}!`);
//   //  }
//  }
 
//  const rockBtn = document.querySelector('#rock');
//  rockBtn.onclick= () => console.log('rock');




//  game();
 