const elementKick = document.getElementById('kick')
const btnAttempt = document.getElementById('btn-attempt')

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';
recognition.start()

recognition.addEventListener('result', onSpeak)

function onSpeak(e){
    const kick = e.results[0][0].transcript
    displayKickOnScreen(kick)
    checkKickIsValid(kick)
    gameOver(kick)
}

function displayKickOnScreen(kick){
    elementKick.innerHTML = `
        <div class="message">Você disse:</div>
        <span class="box">${kick}</span>
    `
}

function gameOver(kick){
    if(kick == 'game over'){
        document.body.innerHTML = `
            <h1>Game over</h1>
            <h3>O jogo terminou</h3>
            <button id="btn-play-again" class="btn-attempt">Jogar novamente</button>
        `
    }
}

btnAttempt.addEventListener('click', () => recognition.start())