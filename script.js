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

function game(){
    alert("Total 5 rounds.");
    let playerCount = 0, computerCount = 0;
    for(let i = 0; i < 5; i++){
        /*Take input from user and generate computer choice*/
        const playerSelection = prompt("Enter your choice('Rock', 'Paper', 'Scissors'): ");
        const computerSelection = computerPlay();

        /* simulate a game and take result*/
        let result = playRound(playerSelection.toLowerCase(), computerSelection);
        if(result === 'player'){
            alert("You Win! " + playerSelection.toUpperCase() + " beats " + computerSelection.toUpperCase());
            playerCount += 1;
        }
        else if(result === 'computer'){
            alert("Computer Wins! " + computerSelection.toUpperCase() + " beats " + playerSelection.toUpperCase());
            computerCount += 1;
        }
        else{
            alert("It's a draw!!! You both played " + computerSelection.toUpperCase());
        }
    }
    /*Decide who wins*/
    if(playerCount > computerCount){
        alert("You: " + playerCount + " Computer: " + computerCount + "\nYou Win!!!");
    }
    else if(computerCount > playerCount){
        alert("You: " + playerCount + " Computer: " + computerCount + "\nComputer wins!!! Better luck next time!!!");
    }
    else{
        alert("You: " + playerCount + " Computer: " + computerCount + "\nIt's a draw!!!");
    }
}

game();
