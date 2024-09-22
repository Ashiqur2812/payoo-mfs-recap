document.getElementById('btn-cash-money').addEventListener('click', function (event) {
    event.preventDefault()
    console.log('Added event handler');

    const cashMoney = document.getElementById('input-cash-money').value
    const pinNumber = document.getElementById('pin-number').value

    if(pinNumber === '567'){

        const balance = document.getElementById('account-balance').innerText
        const checkBalance = Number(balance)
        const cashMoneyNumber = Number(cashMoney)
        const newBalance = checkBalance - cashMoneyNumber

        document.getElementById('account-balance').innerText = newBalance
    }
    else{
        alert('You failed to cash out. Please try again!')
    }
})