// function getInputFieldValueById(id){
//     const inputValue = document.getElementById(id).value
//     return Number(inputValue)
// }




function getInputFieldValueById(id) {
    const inputValue = document.getElementById(id).value
    return Number(inputValue)
}

function getTextFieldValueById(id) {
    const textValue = document.getElementById(id).innerText
    return Number(textValue)
}

function showSectionById(id) {
    const showValue = document.getElementById(id).innerText
    return Number(showValue)
}

function showSectionById(id) {
    document.getElementById('add-money-form').classList.add('hidden')
    document.getElementById('cash-out-form').classList.add('hidden')
    document.getElementById('transaction-history').classList.add('hidden')

    document.getElementById(id).classList.remove('hidden')
}
