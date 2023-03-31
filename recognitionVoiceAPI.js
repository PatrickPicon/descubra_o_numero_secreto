const elementKick = document.getElementById('kick')

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';
recognition.start()

recognition.addEventListener('result', onSpeak)

function onSpeak(e){
    const kick = e.results[0][0].transcript
    displayKickOnScreen(kick)
    checkKickIsValid(kick)
}

function displayKickOnScreen(kick){
    elementKick.innerHTML = `
        <div class="message">Você disse:</div>
        <span class="box">${kick}</span>
    `
}