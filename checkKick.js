function checkKickIsValid(kick){
    const number = +kick;
    
    if(kickIsInvalid(number)){
        elementKick.innerHTML += `<div>Valor inválido. Diga um número.</div>`
        return
    }

    if(kickIsHigherOrLowerThanAllowed(number)){
        elementKick.innerHTML +=`<div>Valor inválido! O número escolhido precisa estar entre ${smallestValue} e ${higherValue}</div>`
        return
    }
    if(number === secretNumber){
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O número secreto era ${secretNumber}</h3>
            <button id="btn-play-again" class="btn-attempt">Jogar novamente</button>
        `
    } else if(number > secretNumber){
        elementKick.innerHTML += `
        <div class="tips">O número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>
        `
    } else {
        elementKick.innerHTML += `
        <div class="tips">O número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>
        `
    }
}

function gameOver(kick){
    if(kick == 'game over'){
        document.body.innerHTML = `
            <h1>Game over!!</h1>
            <h3>Clique no botão para jogar novamente</h3>
            <button id="btn-play-again" class="btn-attempt">Jogar novamente</button>
        `
    }
}

function kickIsInvalid(number){
    return Number.isNaN(number)
}

function kickIsHigherOrLowerThanAllowed(number){
    return number > higherValue || number < smallestValue
}

document.body.addEventListener('click', e => {
    if(e.target.id == 'btn-play-again'){
        window.location.reload()
    }
})