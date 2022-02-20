// function for getting input value
function getInputValue(idName) {
    const inputField = document.getElementById(idName);
    const inputValue = parseFloat(inputField.value);
    inputField.value = '';
    return inputValue;
}

// function for getting inner text of an element
function getInnerText(idName) {
    const textElement = document.getElementById(idName);
    const innerText = parseFloat(textElement.innerText);
    return innerText;
}

// income

document.getElementById('calculate-btn').addEventListener('click', function () {
    const incomeAmount = getInputValue('monthly-income');
    const foodExpense = getInputValue('food-expense');
    const rentExpense = getInputValue('rent-expense');
    const clothsExpense = getInputValue('cloths-expense');
    const totalExpense = foodExpense + rentExpense + clothsExpense;
    const totalExpenseBox = document.getElementById('total-expense');
    const totalBalance = incomeAmount - totalExpense;
    const totalBalanceBox = document.getElementById('total-balance');
    totalExpenseBox.innerText = totalExpense;
    totalBalanceBox.innerText = totalBalance;
});

// savins calculation

document.getElementById('savings-btn').addEventListener('click', function () {
    const totalBalance = getInnerText('total-balance');
    const rate = getInputValue('savings-rate');
    const savingsAmount = totalBalance * (rate / 100);
    const totalSavingsBox = document.getElementById('total-savings');
    totalSavingsBox.innerText = savingsAmount;
    const remainingBalance = totalBalance - savingsAmount;
    const remainingBalanceBox = document.getElementById('total-remaining-balance');
    remainingBalanceBox.innerText = remainingBalance;

})