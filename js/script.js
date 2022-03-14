function computerPlay(){
    let option=Math.floor(Math.random() * 3) + 1;
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
        return `Game tied. Both chose ${computerSelection.toUpperCase()}`;
    }else if (playerSelection.toUpperCase()=='ROCK' && computerSelection.toUpperCase()=='PAPER'){
        return `You Lose! ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}`;
    }else if (playerSelection.toUpperCase()=='PAPER' && computerSelection.toUpperCase()=='SCISSORS'){
        return `You Lose! ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}`;
    }else if (playerSelection.toUpperCase()=='SCISSORS' && computerSelection.toUpperCase()=='ROCK'){
        return `You Lose! ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}`;
    }else if (playerSelection.toUpperCase()=='ROCK' && computerSelection.toUpperCase()=='SCISSORS'){
        return `You Win! ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}`;
    }else if (playerSelection.toUpperCase()=='PAPER' && computerSelection.toUpperCase()=='ROCK'){
        return `You Win! ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}`;
    }else if (playerSelection.toUpperCase()=='SCISSORS' && computerSelection.toUpperCase()=='PAPER'){
        return `You Win! ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}`;
    }else{
        return 'Invalid value'
    }
  }
  
  const playerSelection = "SCISsORS";
  const computerSelection = computerPlay();
  console.log(playRound(playerSelection, computerSelection));
