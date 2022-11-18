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
    
    const zeroTitle = document.querySelector('.title-red')
    if (billValue === 0 || billValue === undefined || billValue === '') {
        zeroTitle.style.display = 'block'
        billInput.focus()
        billInput.classList.add('red-outline')
        return false
    } else {
        zeroTitle.style.display = 'none'
    }

    const zeroTitleBottom = document.querySelector('.title-red-bottom')
    if (peopleValue === 0 || peopleValue === undefined || peopleValue === '') {
        zeroTitleBottom.style.display = 'block'
        peopleInput.focus()
        peopleInput.classList.add('red-outline')
        return false
    } else {
        zeroTitleBottom.style.display = 'none'
    }


    const tip = event.target.closest('.panel-item')
    const num = tip.innerText.slice(0, -1)
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
