const playerNameInput = document.querySelector('.pop-up-body input');

const ifEmptyInput = 'Please, provide your name!';
const ifShortName = 'Your name must have at least 2 signs';

export function startGame() {

    const playerNameInputValue = playerNameInput.value;

    if (playerNameInputValue !== '') {
        if (playerNameInputValue.length >= 2) {
            document.querySelector('.player-name').textContent = playerNameInputValue;
            document.querySelector('.pop-up').style.opacity = 0;
            setTimeout(() => {
                document.querySelector('.pop-up').style.display = 'none';
            }, 300)
        } else {
            alert(ifShortName);
        }
    } else {
        alert(ifEmptyInput)
    }
}

