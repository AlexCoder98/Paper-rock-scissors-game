import { startGame } from "./startGame.js";

const playerScore = document.querySelector('.player');
const aiScore = document.querySelector('.computer');
const options = document.querySelectorAll('.option');
const btn = document.querySelector('.play');

const startBtn = document.querySelector('.start-game');

startBtn.addEventListener('click', startGame);

let player = {
    choice: '',
    score: 0,
}

let ai = {
    choice: '',
    score: 0,
}

function yourChoice(e) {
    options.forEach(div => div === e.target ? div.classList.add('active') : div.classList.remove('active'));
    player.choice = e.target.dataset.option;
    let { choice } = player;
    return choice;
}

options.forEach(option => option.addEventListener('click', yourChoice));

function aiChoice() {
    let { choice } = ai;
    const randomNumber = Math.floor(Math.random() * options.length);
    choice = options[randomNumber].dataset.option;
    return choice;
};

function updateScore(player = 0, ai = 0) {
    playerScore.textContent = player;
    aiScore.textContent = ai;
}

function play(playerChoice) {
    if (!playerChoice) {
        return alert(`You didn't choose any option!`);;
    } else {
        const computerChoice = aiChoice();

        if (playerChoice === computerChoice) {
            alert('Draw!')
        } else if ((playerChoice === 'rock' && computerChoice === 'scissors') || (playerChoice === 'paper' && computerChoice === 'rock') || (playerChoice === 'scissors' && computerChoice === 'paper')) {
            alert('You won!');
            player.score++;
        } else {
            alert('Computer won :(')
            ai.score++;
        }
    }

    updateScore(player.score, ai.score);
}

btn.addEventListener('click', () => play(player.choice));