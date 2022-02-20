// function for getting input value
function getInputValue(idName) {
    const inputField = document.getElementById(idName);
    const inputValue = parseFloat(inputField.value);
    inputField.value = '';
    return inputValue;

};

// function for getting inner text of an element
function getInnerText(idName) {
    const textElement = document.getElementById(idName);
    const innerText = parseFloat(textElement.innerText);
    return innerText;
};

// error handeling string not allowed
function errorTextStringInput(idName, isBlock) {
    const errorMessageElement = document.getElementById(idName);
    if (isBlock) {
        errorMessageElement.style.display = 'block';
    } else {
        errorMessageElement.style.display = 'none';
    }
};


// error handeling minus number not allowed
function errorTextNegetiveValue(idName, isBlock) {
    const errorMessageElement = document.getElementById(idName);
    if (isBlock) {
        errorMessageElement.style.display = 'block';
    } else {
        errorMessageElement.style.display = 'none';
    }
};

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
    if (isNaN(foodExpense) || isNaN(rentExpense) || isNaN(clothsExpense) || isNaN(incomeAmount)) {
        errorTextStringInput('test-fail-input', true);
    } else if (incomeAmount < 0 || foodExpense < 0 || clothsExpense < 0) {
        errorTextNegetiveValue('test-fail-input-minus', true);
        errorTextStringInput('test-fail-input', false);
    } else {
        errorTextNegetiveValue('test-fail-input-minus', false);
        errorTextStringInput('test-fail-input', false);
        totalExpenseBox.innerText = totalExpense;
        totalBalanceBox.innerText = totalBalance;
    }
});

// savins calculation

document.getElementById('savings-btn').addEventListener('click', function () {
    const totalBalance = getInnerText('total-balance');
    const rate = getInputValue('savings-rate');
    const savingsAmount = totalBalance * (rate / 100);
    const totalSavingsBox = document.getElementById('total-savings');
    const remainingBalance = totalBalance - savingsAmount;
    const remainingBalanceBox = document.getElementById('total-remaining-balance');
    if (isNaN(remainingBalance) || isNaN(savingsAmount)) {
        errorTextStringInput('test-fail-savings', true);
    } else if (rate < 0) {
        errorTextNegetiveValue('test-fail-savings-minus', true);
        errorTextStringInput('test-fail-savings', false);
    } else {
        errorTextNegetiveValue('test-fail-savings-minus', false);
        errorTextStringInput('test-fail-savings', false);
        remainingBalanceBox.innerText = remainingBalance;
        totalSavingsBox.innerText = savingsAmount;
    }
});