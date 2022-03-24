//variables css
const inputs = document.querySelectorAll('input');
const wonGames = document.querySelector('#result-won');
const lostGames = document.querySelector('#result-lost');
const tiedGames = document.querySelector('#result-tied');
const finalGame = document.querySelector('#general-result');
const infoFinalResult = document.querySelector('#info-result')
const finalResults = document.querySelector('#final-results');
const currentResult = document.querySelector('#current-result');
finalResults.style.visibility = 'hidden';
finalGame.style.visibility = 'hidden';
infoFinalResult.style.visibility = 'hidden';
//general variables
let contGames=0;
let contGamePlayer=0;
let contGameComputer=0;
let contGameTies=0;
let resultGame=[];



function computerPlay(){
    let option
    option=Math.floor(Math.random() * 3) + 1;
    switch(option){
        case 1:
            return 'Rock';
        case 2:
            return 'Paper';
        case 3: 
            return 'Scissors';
        default:
            return 'Rock';
    }
}
function playRound(playerSelection, computerSelection) {
    if (playerSelection.toUpperCase()===computerSelection.toUpperCase()){
        return ['0',`Game tied. Both chose ${computerSelection.toUpperCase()}`];
    }else if (playerSelection.toUpperCase()=='ROCK' && computerSelection.toUpperCase()=='PAPER'){
        return ['-1',`You Lose! ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}`];
    }else if (playerSelection.toUpperCase()=='PAPER' && computerSelection.toUpperCase()=='SCISSORS'){
        return ['-1',`You Lose! ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}`];
    }else if (playerSelection.toUpperCase()=='SCISSORS' && computerSelection.toUpperCase()=='ROCK'){
        return ['-1',`You Lose! ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}`];
    }else if (playerSelection.toUpperCase()=='ROCK' && computerSelection.toUpperCase()=='SCISSORS'){
        return ['1',`You Win! ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}`];
    }else if (playerSelection.toUpperCase()=='PAPER' && computerSelection.toUpperCase()=='ROCK'){
        return ['1',`You Win! ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}`];
    }else if (playerSelection.toUpperCase()=='SCISSORS' && computerSelection.toUpperCase()=='PAPER'){
        return ['1',`You Win! ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}`];
    }else{
        return ['-100','Invalid value']
    }
  }
function game(optionGame){
    let playerSelection;
    let computerSelection = computerPlay();
    switch (optionGame) {
        case "button-rock":
            playerSelection="rock";
            break;
        case "button-paper":
            playerSelection="paper";
            break;
        case "button-scissors":
            playerSelection="scissors";
            break;
    
        default:
            playerSelection="rock";
            break;
    }
    resultGame=playRound(playerSelection, computerSelection);
    if (resultGame[0]==-100){
        alert(resultGame[1]);
    }else{
        contGames++;
        currentResult.textContent = resultGame[1];
        if (Number(resultGame[0])>0){
            contGamePlayer++;
            currentResult.style.color = 'white';
            currentResult.style.backgroundColor='green';
        }else if (Number(resultGame[0])<0){
            contGameComputer++;
            currentResult.style.color = 'white';
            currentResult.style.backgroundColor='red';
        }else{
            contGameTies++;
            currentResult.style.color = 'black';
            currentResult.style.backgroundColor='yellow';
        }
    }
    if (contGames>=5){
        finalResults.style.visibility = 'visible';
        finalGame.style.visibility = 'visible';
        infoFinalResult.style.visibility = 'visible';
        
        wonGames.textContent = `${contGamePlayer}`
        lostGames.textContent = `${contGameComputer}`;
        tiedGames.textContent = `${contGameTies}`;
        finalGame.style.borderStyle='solid'
        if (contGamePlayer > contGameComputer){
            finalGame.textContent = "YOU WIN";
            finalGame.style.color = 'white';
            finalGame.style.backgroundColor='green';
        }else if (contGamePlayer < contGameComputer){
            finalGame.textContent = "YOU LOSE";
            finalGame.style.color = 'white';
            finalGame.style.backgroundColor='red';
        }else{
            finalGame.textContent = "YOU TIE";
            finalGame.style.color = 'black';
            finalGame.style.backgroundColor='yellow';
        }
        finalGame.style.borderStyle = 'none';

        contGames=0;
        contGamePlayer=0;
        contGameComputer=0;
        contGameTies=0;
        resultGame=[];
    }else{
        finalResults.style.visibility = 'hidden';
        finalGame.style.visibility = 'hidden';
        infoFinalResult.style.visibility = 'hidden';
    }
    
          
    

    
}

inputs.forEach((input) => {

    input.addEventListener('click', () => {
      game(input.id);
    });
  });
//game();


