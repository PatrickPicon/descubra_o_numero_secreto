function checkKickIsValid(kick){
    const number = +kick;
    
    if(kickIsInvalid(number)){
        console.log('Numero inválido')
    }

    if(kickIsHigherOrLowerThanAllowed(number)){
        console.log(`Valor inválido! O número secreto precisa estar entre ${smallestValue} e ${higherValue}`)
    }
}

function kickIsInvalid(number){
    return Number.isNaN(number)
}

function kickIsHigherOrLowerThanAllowed(number){
    return number > higherValue || number < smallestValue
}