let scorePlayer=0;
let scoreComputer=0;

const buttons = document.querySelectorAll('button');
const message=document.querySelector('#result-message');
const selectionPlayer=document.querySelector('#selection-player');
const selectionComputer=document.querySelector('#selection-computer');
const scoreboardPlayer=document.querySelector('#score-player');
const scoreboardComputer=document.querySelector('#score-computer');

scoreboardPlayer.textContent=scorePlayer;
scoreboardComputer.textContent=scoreComputer;

buttons.forEach((button)=>{
    button.addEventListener('click',()=>{
            game(button.textContent,computerPlay());
    });
})

function computerPlay(){
    let random=Math.floor(Math.random()*(3));
    let computerChoices=['Rock','Paper','Scissors'];
    return selection=computerChoices[random];
}

function playRound(playerSelection, computerSelection){
    if(playerSelection==computerSelection){
        return 'Draw! You both picked '+playerSelection.toLowerCase()+'.';
    }else if(playerSelection=='Rock' && computerSelection=='Scissors'){
        scorePlayer++;
        return 'You win! Rock beats scissors.';
    }else if(playerSelection=='Rock' && computerSelection=='Paper'){
        scoreComputer++;
        return 'You lose! Paper beats rock.';
    }else if(playerSelection=='Paper' && computerSelection=='Rock'){
        scorePlayer++;
        return 'You win! Paper beats rock.';
    }else if(playerSelection=='Paper' && computerSelection=='Scissors'){
        scoreComputer++;
        return 'You lose! Scissors beat paper.';
    }else if(playerSelection=='Scissors' && computerSelection=='Paper'){
        scorePlayer++;
        return 'You win! Scissors beat paper.';
    }else if(playerSelection=='Scissors' && computerSelection=='Rock'){
        scoreComputer++;
        return 'You lose! Rock beats scissors.';
    }
}

function game(playerSelection, computerSelection){
    selectionPlayer.textContent='PLAYER: '+playerSelection;
    selectionComputer.textContent='COMPUTER: '+computerSelection;
    message.textContent=playRound(playerSelection, computerSelection);
    if(message.textContent.includes('win')){
        message.style.color='green';
    }else if(message.textContent.includes('lose')){
        message.style.color='red';
    }else{
        message.style.color='grey';
    }
    scoreboardPlayer.textContent=scorePlayer;
    scoreboardComputer.textContent=scoreComputer;
    if(scorePlayer==5){
        alert('You won. Congratulations!');
        location.reload();
    }else if(scoreComputer==5){
        alert('You lost. Better luck next time!');
        location.reload();
    }
}