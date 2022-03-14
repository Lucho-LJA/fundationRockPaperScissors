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

let computerOption;
computerOption=computerPlay();
console.log(computerOption);