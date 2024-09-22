// console.log('utilities loaded');

// function getInputFieldValueById() {
//     console.log('will get value by id');
//     const addMoney = document.getElementById('input-add-money').value
//     return addMoney
// }

function getInputFieldValueById(id){
   const inputValue =  document.getElementById(id).value
   return Number(inputValue)
}

function getTextFieldValueById(id){
    const textValue = document.getElementById(id).innerText
    return Number(textValue)
}