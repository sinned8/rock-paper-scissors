const playsArray = [
    'Rock','Paper','Scissors'
];

function getComputerChoice (playsArray){
    const random = Math.floor((Math.random() * playsArray.length));
    const randomMove = playsArray[random];
    return randomMove;
    
}
console.log(getComputerChoice(playsArray));