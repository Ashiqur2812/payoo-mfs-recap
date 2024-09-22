// document.getElementById('btn-add-money').addEventListener('click', function (event) {
//     event.preventDefault()
//     console.log('add event handler');

//     const addMoney = getInputFieldValueById('input-add-money')
//     const pinNumber = getInputFieldValueById('pin-number')
//     console.log(addMoney,pinNumber);
// })




document.getElementById('btn-add-money').addEventListener('click', function (event) {
    event.preventDefault()

    console.log('added event handler');

    const addMoney = getInputFieldValueById('input-add-money')
    const pinNumber = getInputFieldValueById('pin-number')
    // console.log(addMoney,pinNumber);

    if(pinNumber === 1234){
        
        const balance = getTextFieldValueById('account-balance')
        const newBalance = balance + addMoney
        document.getElementById('account-balance').innerText = newBalance 

    }
    else{
        alert('Added to fail money. Please try again later!')
    }
})
