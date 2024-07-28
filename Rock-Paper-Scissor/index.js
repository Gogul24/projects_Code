const choices = ['rock','paper','scissor'];
const resultDisplay = document.getElementById('result')
const playerScore = document.getElementById('playerScore');
const computerScore = document.getElementById('computerScore');
let playerScoreCount = 0;
let computerScoreCount = 0;

const playGame = (playerbtn)=>{
    const computerChoice = choices[Math.floor(Math.random()*3)]
    const compDisplay = document.getElementById('computerChoice');
    compDisplay.textContent = `Computer Choice : ${computerChoice}`
    let result = '';
    const playerChoice = document.getElementById('playerChoice');
    playerChoice.textContent = `Player Choice : ${playerbtn}`
    
    if(playerbtn===computerChoice){
        result= `IT'S A TIE`
    }
    else{
        switch (playerbtn) {
            case 'rock':
                result = (computerChoice === 'scissor')?'YOU WIN!!':`YOU LOSE :(`
                break;
            case 'paper':
                result = (computerChoice === 'rock')?'YOU WIN!!':`YOU LOSE :(`
                break;
            case 'scissor':
                result = (computerChoice === 'paper')?'YOU WIN!!':`YOU LOSE :(`
                break;
            default:
                break;
        }
    }

    resultDisplay.classList.remove('greentext','redtext')
    
    switch (result) {
        case 'YOU WIN!!':
            playerScoreCount++;
            resultDisplay.classList.add('greentext')
            playerScore.textContent = `PLAYER SCORE : ${playerScoreCount}`;
            break;
        case 'YOU LOSE :(':
            computerScoreCount++;
            resultDisplay.classList.add('redtext')
            computerScore.textContent = `COMPUTER SCORE : ${computerScoreCount}`;   
            break;
        default:
            break;
    }
    
    resultDisplay.textContent = `${result}`   
}
const restart = () => {
    computerScoreCount = 0;
    playerScoreCount = 0;
    const compDisplay = document.getElementById('computerChoice');
    const playerChoice = document.getElementById('playerChoice');
    let result  = '';
    resultDisplay.textContent = `${result}`
    compDisplay.textContent = 'Computer Choice :';
    playerChoice.textContent = 'Player Choice :';
    playerScore.textContent = 'PLAYER SCORE : 0';
    computerScore.textContent = 'COMPUTER SCORE : 0';
}
