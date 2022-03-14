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
function game(){
    let playerSelection;
    let cont=0;
    let resultGame;
    let contGamePlayer=0;
    let contGameComputer=0;
    let contGameTies=0;
    for (let i = 0; i < 5; i++){
        cont=1;
        computerSelection=computerPlay();
        while (cont==1){
            playerSelection=prompt("Select: Rock, Paper, or Scissors:\t");
            console.log(computerSelection);
            resultGame=playRound(playerSelection, computerSelection);
            if (resultGame[0]==-100){
                cont=1;
            }else{
                cont=0;
            }
            alert(resultGame[1]);
        }
        if (Number(resultGame[0])>0){
            contGamePlayer++;
        }else if (Number(resultGame[0])<0){
            contGameComputer++;
        }else{
            contGameTies++;
        }   
    }
    if (contGamePlayer > contGameComputer){
        alert(`You Win. \n${contGameTies} Ties.\n${contGamePlayer} Won.\n${contGameComputer} Lost`);
    }else if (contGamePlayer < contGameComputer){
        alert(`You Lose. \n${contGameTies} Ties.\n${contGamePlayer} Won.\n${contGameComputer} Lost`);
    }else{
        alert(`You Tie. \n${contGameTies} Ties.\n${contGamePlayer} Won.\n${contGameComputer} Lost`);
    }
}
game();


