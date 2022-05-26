function computerPlay(){
    let computerChoice = Math.floor(Math.random()*3);
    if(computerChoice == 0){
        return "rock";
    }
    else if(computerChoice == 1){
        return "paper";
    }
    else{
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection){
    if(playerSelection === 'rock'){
        if(computerSelection === 'scissors'){
            return 'player';
        }
        else if(computerSelection === 'paper'){
            return 'computer';
        }
        else{
            return 'draw';
        }
    }
    else if(playerSelection === 'paper'){
        if(computerSelection === 'rock'){
            return 'player';
        }
        else if(computerSelection === 'scissors'){
            return 'computer';
        }
        else{
            return 'draw';
        }
    }
    else if(playerSelection === 'scissors' && computerSelection === 'paper'){
        if(computerSelection === 'paper'){
            return 'player';
        }
        else if(computerSelection === 'rock'){
            return 'computer';
        }
        else{
            return 'draw';
        }
    }
    
}

function changeGameStatus(playerSelection, computerSelection){
    let player = document.querySelector('.player-choice');
    let computer = document.querySelector('.comp-choice');

    // player-status
    if(playerSelection === 'rock'){
        player.textContent = '🪨';
    }
    else if(playerSelection === 'paper'){
        player.textContent = '📄';
    }
    else if(playerSelection === 'scissors'){
        player.textContent = '✂️';
    }

    // computer-status
    if(computerSelection === 'rock'){
        computer.textContent = '🪨';
    }
    else if(computerSelection === 'paper'){
        computer.textContent = '📄';
    }
    else if(computerSelection === 'scissors'){
        computer.textContent = '✂️';
    }
}

function updateScores(playerCount, computerCount){
    let player = document.querySelector('.player-score');
    let computer = document.querySelector('.comp-score');

    player.textContent = `Player: ${playerCount}`;
    computer.textContent = `Computer: ${computerCount}`;
}

function toSentenceCase(string){
    return string[0].toUpperCase() + string.substr(1).toLowerCase();
}

function restartGame(){
    playerCount = 0;
    computerCount = 0;
    document.querySelector('h2').textContent = "Lets's Go! Choose One!";
    document.querySelector('h3').textContent = "First to score 5 points wins";
    document.querySelector('.player-choice').textContent = "";
    document.querySelector('.comp-choice').textContent = "";
    document.querySelector('.player-score').textContent = "Player: 0";
    document.querySelector('.comp-score').textContent = "Computer: 0";
}

let playerCount = 0, computerCount = 0;
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {

        //description
        let h2 = document.querySelector('h2');
        let h3 = document.querySelector('h3');
        
        // check id's
        let computerSelection = computerPlay();
        let result = playRound(button.id, computerSelection);
        
        if(result === 'player'){
            h2.textContent = "You Won!";
            h3.textContent = toSentenceCase(button.id) + " beats " + toSentenceCase(computerSelection);
            changeGameStatus(button.id, computerSelection);
            playerCount += 1;
        }
        else if(result === 'computer'){
            h2.textContent = "You Lose!";
            h3.textContent = toSentenceCase(button.id) + " gets beaten by " + toSentenceCase(computerSelection);
            changeGameStatus(button.id, computerSelection);
            computerCount += 1;
        }
        else{
            h2.textContent = "It's a Draw!";
            h3.textContent = "Same Pinch! 😜";
            changeGameStatus(button.id, computerSelection);

        }
        updateScores(playerCount, computerCount);

        if(playerCount === 5){
            alert('You Won!!!');
            restartGame();
        }
        else if(computerCount === 5){
            alert('Better luck next time !!!');
            restartGame();
        }
    });
});
