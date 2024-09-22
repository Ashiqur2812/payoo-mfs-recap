document.getElementById('btn-cash-money')
    .addEventListener('click', function (event) {
        event.preventDefault()

        const cashOut = getInputFieldValueById('input-cash-money')
        const pinNumber = getInputFieldValueById('cash-out-pin-number')
        // console.log(cashOut, pinNumber);

        if (pinNumber === 1234) {
            const balance = getTextFieldValueById('account-balance')
            const newBalance = balance - cashOut
            document.getElementById('account-balance').innerText = newBalance
        }
        else {
            alert('Failed to login. Please try again!')
        }
    })