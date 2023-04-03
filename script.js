
const btnEl = document.querySelector('#btn')
const heightEl = document.querySelector('#height')
const weightEl = document.querySelector('#weight')
const bmiEl = document.querySelector('#bmi')
const resultEl = document.querySelector('#result')

// function getHeight() {
//     currentValue = heightEl.value
// }

function computeBmi() {
    // btnEl.disabled = false;
    heightValue = heightEl.value / 100
    weightValue = weightEl.value
    bmiValue = weightEl.value / (heightValue * heightValue)
    bmiEl.value = +bmiValue.toFixed(2)
    if (bmiEl.value <= 18.5) {
        resultEl.innerText = 'Na weight lhom val'
        // btnEl.disabled = true
    } else if (bmiValue > 18.5 && bmiValue <= 24.9) {
        resultEl.innerText = 'Na weight hoisel, kol hakavod'
        resultEl.style.color = 'green'
        // btnEl.disabled = true

    } else if (bmiValue >= 25 && bmiValue <= 29.9) {
        resultEl.innerText = 'Na weight tam val, lop hih in'
        resultEl.style.color = 'orange'
        // btnEl.disabled = true

    } else {
        resultEl.innerText = 'Na thao val te, aji jang naum tapoi'
        resultEl.style.color = 'red'
        // btnEl.disabled = true

    }
    // btnEl.disabled = true

}

btnEl.addEventListener('click', computeBmi)