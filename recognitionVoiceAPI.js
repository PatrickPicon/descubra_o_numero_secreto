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

btnAttempt.addEventListener('click', () => recognition.start())