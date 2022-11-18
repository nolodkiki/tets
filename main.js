const billInput = document.querySelector('#billInput')
const selectTip = document.querySelector('#selectTip')
const peopleInput = document.querySelector('#peopleInput')
const personTip = document.querySelector('#personTip')
const totalPersonCheck = document.querySelector('#totalCheck')
const btn = document.querySelector('#btn')
const custom = document.querySelector('#custom')


selectTip.addEventListener('click', select)
custom.addEventListener('input', inputValue)
btn.addEventListener('click', refreshPage)



function select(event) {
    event.stopPropagation()
    if (event.target.closest('.panel-item-custom')) {
        return false
    }
    const billValue = Number(billInput.value)
    const peopleValue = Number(peopleInput.value)
    const tip = event.target.closest('.panel-item')
    const num = tip.innerText.slice(0, -1)
    console.log(num)
    const tipAmount = billValue * (num * 0.01) / peopleValue
    const sumPerson = tipAmount + billValue / peopleValue
    personTip.innerHTML = `$${tipAmount.toFixed(2)}`
    totalPersonCheck.innerHTML = `$${sumPerson.toFixed(2)}`
    // console.log(sumPerson)
}

function inputValue(event) {
    event.stopImmediatePropagation()
    const customInput = Number(custom.value)
    if (customInput === 0) {
        return false
    }
    if (customInput >= 1) {
        const billValue = Number(billInput.value)
        const peopleValue = Number(peopleInput.value)
        const tipAmount = billValue * (customInput * 0.01) / peopleValue
        const sumPerson = tipAmount + billValue / peopleValue
        personTip.innerHTML = `$${tipAmount.toFixed(2)}`
        totalPersonCheck.innerHTML = `$${sumPerson.toFixed(2)}`
    }
}


function refreshPage(){
    window.location.reload();
}
