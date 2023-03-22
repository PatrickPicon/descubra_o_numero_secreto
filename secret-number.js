const smallestValue = 1
const higherValue = 1000
const elementMinValue = document.getElementById('min-value')
const elementMaxValue = document.getElementById('max-value')

minValue.innerHTML = smallestValue
maxValue.innerHTML = higherValue

function randomNumberGenerate(){
    return parseInt(Math.random() * higherValue + smallestValue)
}

const secretNumber = randomNumberGenerate()

console.log(secretNumber)

