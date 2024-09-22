document.getElementById('btn-add-money').addEventListener('click', function (event) {
    event.preventDefault()
    console.log('added event listener');

    const addMoney = document.getElementById('input-add-money').value
    const pinNumber = document.getElementById('pin-number').value

    if(pinNumber === '567'){

        const balance = document.getElementById('account-balance').innerText
        const checkBalance = Number(balance)
        const addMoneyNumber = Number(addMoney)
        const newBalance = checkBalance + addMoneyNumber

        document.getElementById('account-balance').innerText = newBalance
    }
    else{
        alert('Falied to add money. Please try again!')
    }
})