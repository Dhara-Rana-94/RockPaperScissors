let playerscore= 0
let compscore= 0


function game(){
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Do you choose rock, paper or scissors?").toUpperCase();
        let getComputerChoice = Math.floor(Math.random()*(3-1+1)+1);
                if (getComputerChoice == 1) {
            getComputerChoice = "ROCK";
                } else if(getComputerChoice ==2) {
            getComputerChoice = "PAPER";
                } else {
            getComputerChoice = "SCISSORS";
            } 
        playround(playerSelection, getComputerChoice);
    console.log("User Choice: " + playerSelection);
    console.log("Computer Choice: " + getComputerChoice);
    };

    console.log("Player Score: " + playerscore);
    console.log("Computer Score: " + compscore);
    result(playerscore, compscore);
}

function result(playerscore, compscore) {
    if (playerscore>compscore){
        console.log("Congratulations you win!");
    } else if (playerscore < compscore) {
        console.log("WOMP WOMP WOMP You lose!");
    } else {
        console.log ("Game is a Draw!");
    }


}




function playround(choice1, choice2) {
    if( choice1 === 'ROCK' && choice2 === 'SCISSORS') {
    playerscore +=1;
    console.log(choice1 + ' wins vs ' + choice2 + '. Congratulations!');
} else if( choice1 === 'ROCK' && choice2 === 'PAPER') {
    compscore +=1;
    console.log(choice1 + ' loses vs ' + choice2 + '. Try again!');
} else if( choice1 === 'ROCK' && choice2 === 'ROCK') {
    console.log(choice1 + ' ties with ' + choice2 + '. Try again!');
} else if( choice1 === 'PAPER' && choice2 === 'ROCK') {
    playerscore +=1;
    console.log(choice1 + ' wins vs ' + choice2 + '. Congratulations!');
} else if( choice1 === 'PAPER' && choice2 === 'PAPER') {
    console.log(choice1 + ' ties with ' + choice2 + '. Try again!');
} else if( choice1 === 'PAPER' && choice2 === 'SCISSORS') {
    compscore +=1;
    console.log(choice1 + ' loses vs ' + choice2 + '. Try again!');
} else if( choice1 === 'SCISSORS' && choice2 === 'SCISSORS') {
    console.log(choice1 + ' ties with ' + choice2 + '. Try again!');
} else if( choice1 === 'SCISSORS' && choice2 === 'PAPER') {
    playerscore += 1;
    console.log(choice1 + ' wins vs ' +choice2 + '. Congratulations!');
} else if( choice1 === 'SCISSORS' && choice2 === 'ROCK') {
    compscore +=1;
    console.log(choice1 + ' loses vs ' + choice2 + '. Try again!');
} else { console.log('Enter a valid move! Refresh the damn page!');
}

    

}

game();