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
    else if(playerSelection === 'scissors'){
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

function updateRoundResult(playerSelection, computerSelection, result){
    const h2 = document.querySelector('h2');
    const h3 = document.querySelector('h3');
    if(result === 'player'){
        h2.textContent = "You Won!";
        h3.textContent = toSentenceCase(playerSelection) + " beats " + toSentenceCase(computerSelection);
        updateGameStatus(playerSelection, computerSelection);
        playerCount += 1;
    }
    else if(result === 'computer'){
        h2.textContent = "You Lose!";
        h3.textContent = toSentenceCase(playerSelection) + " gets beaten by " + toSentenceCase(computerSelection);
        updateGameStatus(playerSelection, computerSelection);
        computerCount += 1;
    }
    else{
        h2.textContent = "It's a Draw!";
        h3.textContent = "Same Pinch! 😜";
        updateGameStatus(playerSelection, computerSelection);

    }
}

function updateGameStatus(playerSelection, computerSelection){
    const player = document.querySelector('.player-choice');
    const computer = document.querySelector('.comp-choice');

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

function updateScores(){
    const player = document.querySelector('.player-score');
    const computer = document.querySelector('.comp-score');

    player.textContent = `Player: ${playerCount}`;
    computer.textContent = `Computer: ${computerCount}`;
}

function toSentenceCase(string){
    return string[0].toUpperCase() + string.substr(1).toLowerCase();
}

function gameOver(){
    if(playerCount > computerCount){
        document.querySelector(".overlay").style.display = "block";
        document.querySelector('.winner').textContent = "You Won !!!";
        playAgain();
    }
    else if(playerCount < computerCount){
        document.querySelector(".overlay").style.display = "block";
        document.querySelector('.winner').textContent = "Better Luck Next Time !!!";
        playAgain();
    }
}

function playAgain(){
    const restart = document.querySelector('.restart')
    restart.addEventListener('click', () => {
        restartGame();
        document.querySelector(".overlay").style.display = "none";
    });
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


// main
let playerCount = 0, computerCount = 0;
const buttons = document.querySelectorAll('div.choices button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        
        let playerSelection = button.id;
        let computerSelection = computerPlay();
        let result = playRound(playerSelection, computerSelection);
        
        updateRoundResult(playerSelection, computerSelection, result);
        updateScores();

        if(playerCount === 5 || computerCount === 5){
            gameOver();
        }
    });
});
