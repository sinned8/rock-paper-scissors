
//Global vars
let playerScore = 0;
let computerScore = 0;
const roundClass = document.querySelector('.roundClass');
const scoreMsg = document.querySelector('.score');
const choices = document.querySelectorAll('.choice')

//Calling start functions
startGame();
updateScore();


//Function for the CPU play. Chooses a 'random' from three given values 
// and returns the CPU choice
function computerPlay(){
  let choice = Math.floor(Math.random() * (3) + 1);
  if (choice === 1) {
      return "rock";
  } else if (choice === 2) {
      return "paper";
  } else {
      return "scissors";
  }
 }


// Function to play a round using player & computer selection as input vars
  function round(playerSelection,computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    if (playerSelection  === computerSelection) {
      roundClass.textContent = `You chose ${playerSelection} and the CPU chose ${computerSelection}, thus its a tie!`;
    } 
    else if (playerSelection  === 'rock' && computerSelection === 'paper'){
      computerScore++;
      roundClass.textContent = `You chose ${playerSelection} and the CPU chose ${computerSelection}, thus CPU wins!`; 
      updateScore(); 
    } 
    else if (playerSelection  === 'paper' && computerSelection === 'scissors'){
      computerScore++;
      roundClass.textContent = `You chose ${playerSelection} and the CPU chose ${computerSelection}, thus CPU wins!`;    
      updateScore();
    } 
    else if (playerSelection  === 'scissors' && computerSelection === 'rock'){
      computerScore++;
      roundClass.textContent = `You chose ${playerSelection} and the CPU chose ${computerSelection}, thus CPU wins!`; 
      updateScore();
    } 
    else{
      playerScore++;
      roundClass.textContent = `You chose ${playerSelection} and the CPU chose ${computerSelection}, thus you win!`;  
      updateScore();
    } 
  }

  //Function to update score 
  function updateScore(){
    if (playerScore == 5){
      scoreMsg.textContent = 'Player wins!';
      endGame();
    }
    else if (computerScore == 5){
      scoreMsg.textContent = 'CPU wins!';
      endGame();
    }
    else {
      scoreMsg.textContent = `Player score: ${playerScore}  CPU score: ${computerScore}`;
    }
  }

  // Function takes what text content from bttn press is as input
  //for player selection and assings the var compselection to run  computerPlay
  // which returns either rock paper or scissors
  //then runs the round function w both inputs
  function getSelection(playerSelection){
    let computerSelection = computerPlay();
    round(playerSelection,computerSelection);
  }


  //Starts game
  function startGame(){
        playerScore = 0;
        computerScore = 0;
        choices.forEach(choice => {
          choice.disabled = false;
      });
      roundClass.textContent = '';
      scoreMsg.textContent = `Player score: ${playerScore}  CPU score: ${computerScore}`;


  }

  //Ends game by disabling bttns
  function endGame(){
        choices.forEach(choice => {
          choice.disabled = true;
      });

  }

  //Have getSelection func run on bttn click 
  choices.forEach(choice => {
    choice.addEventListener('click', () => {
        getSelection(choice.textContent);
    })
  });

































//  delete game function move buttons outside and have it run playround function. read step 2 part2
//  function game(){
//    let i;
//    let userScore = 0;
//    let computerScore = 0;
    
//    let playerSelection = '';
//    let round = playRound(playerSelection, computerPlay());
   
//    document.querySelector('#rock').onclick = function(){
//     playerSelection = 'rock';
//     round;
//     console.log('rock');
//    }
//    document.querySelector('#paper').onclick = function(){
//     playerSelection = 'paper';
//     round;
//     console.log('paper');
//    }
//    document.querySelector('#scissors').onclick = function(){
//     playerSelection = 'scissors';
//     round;
//     console.log('scissors');
//    }
   
   
    
    
   // let playerSelection = prompt("Choose Rock, Paper, or Scissors.");
    
   
   
  //  if(round.indexOf("win") !== -1){
  //   userScore++;
  //   console.log(`The user won Round ${i+1}.`);
  // }

  // else if(round.indexOf("lose") !== -1){ 
  //   computerScore++;  
  //   console.log(`The CPU won Round ${i+1}.`);
  // }
    
  // else if(round.indexOf("tie") !== -1){ 
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
 