let playerscore= 0;
let compscore= 0;

function game(){
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener('click',() =>{
            let playerSelection = button.id; 
            console.log(playerSelection);
            let computerChoice = Math.floor(Math.random()*(3-1+1)+1);
            if (computerChoice == 1) {
                computerChoice = "ROCK";
            } else if(computerChoice ==2) {
                computerChoice = "PAPER";
            } else {
                computerChoice = "SCISSORS";
            };
            const playerScore= document.querySelector('.playerScore');
            const compsScore= document.querySelector('.compScore')
            const pchoice= document.querySelector('.p-choice')
            const cchoice= document.querySelector('.c-choice')
            const rresult= document.querySelector('.roundresult')

            playround(playerSelection,computerChoice)
            pchoice.textContent="User Choice: " + playerSelection;
            cchoice.textContent="Computer Choice: " + computerChoice;
            playerScore.textContent = "Player Score: " + playerscore;
            compsScore.textContent = 'Computer Score: '+ compscore;
            rresult.textContent=gameresult(playerscore, compscore);
            
            if(rresult.textContent===gameresult(playerscore, compscore)){
                playerscore=0; 
                compscore= 0;
            }
  

        function gameresult(playerscore, compscore) {
            if (playerscore==5){
                return("Congratulations you win!");
            
            } else if (compscore==5) {
                return("WOMP WOMP WOMP You lose!");
            
            } else if(playerscore==5 && compscore==5){
                return("Game is a Draw!");
            }
             
            
        } 

    });
    });
}
game()



function playround(choice1, choice2) {
    if( choice1 == 'ROCK' && choice2 == 'SCISSORS') {
    playerscore +=1;
    console.log(choice1 + ' wins vs ' + choice2 + '. Congratulations!');
} else if( choice1 == 'ROCK' && choice2 == 'PAPER') {
    compscore +=1;
    console.log(choice1 + ' loses vs ' + choice2 + '. Try again!');
} else if( choice1 == 'ROCK' && choice2 == 'ROCK') {
    console.log(choice1 + ' ties with ' + choice2 + '. Try again!');
} else if( choice1 == 'PAPER' && choice2 == 'ROCK') {
    playerscore +=1;
    console.log(choice1 + ' wins vs ' + choice2 + '. Congratulations!');
} else if( choice1 == 'PAPER' && choice2 == 'PAPER') {
    console.log(choice1 + ' ties with ' + choice2 + '. Try again!');
} else if( choice1 == 'PAPER' && choice2 == 'SCISSORS') {
    compscore +=1;
    console.log(choice1 + ' loses vs ' + choice2 + '. Try again!');
} else if( choice1 == 'SCISSORS' && choice2 == 'SCISSORS') {
    console.log(choice1 + ' ties with ' + choice2 + '. Try again!');
} else if( choice1 == 'SCISSORS' && choice2 == 'PAPER') {
    playerscore += 1;
    console.log(choice1 + ' wins vs ' +choice2 + '. Congratulations!');
} else if( choice1 == 'SCISSORS' && choice2 == 'ROCK') {
    compscore +=1;
    console.log(choice1 + ' loses vs ' + choice2 + '. Try again!');
} else { console.log('Enter a valid move! Refresh the damn page!');
}
}