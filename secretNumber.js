const smallestValue = 1
const higherValue = 1000
const elementMinValue = document.getElementById('min-value')
const elementMaxValue = document.getElementById('max-value')

elementMinValue.innerHTML = smallestValue
elementMaxValue.innerHTML = higherValue

function randomNumberGenerate(){
    return parseInt(Math.random() * higherValue + smallestValue)
}

const secretNumber = randomNumberGenerate()
console.log(secretNumber)



