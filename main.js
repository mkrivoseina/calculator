let activeNumber = '';
let activeOperator = '';
let storedNumber = '';
let resultIs = '';

function digitIsPressed(digit) {
    resultIs = '';
    if (activeNumber === '0') {
        activeNumber = `0.`;
        updateScreen();
    } else
        activeNumber += digit;
    updateScreen();
}


function operatorIsPressed(operator) {
    if (activeNumber && storedNumber && activeOperator) {
        doMath()
        activeOperator = operator;
        activeNumber = '';
        updateScreen();
    }
    else
    if(resultIs != ''){
        activeOperator = operator;
        doMath();
        storedNumber = resultIs;
        updateScreen();
    }
    else
    {
        activeOperator = operator;
        doMath();
        storedNumber = activeNumber;
        activeNumber = '';
        updateScreen();
    }
}
function equalsIsPressed() {
    doMath();
    resultIs = storedNumber;
    storedNumber = '';
    activeOperator = '';
    activeNumber = '';
    document.getElementById('screen').innerHTML = resultIs; 
}

function clearScreen() {
    activeNumber = '';
    activeOperator = '';
    storedNumber = '';
    resultIs = '';
    updateScreen();
}

function updateScreen() {
    document.getElementById('screen').innerHTML = storedNumber + activeOperator + activeNumber;
}
function doMath() {
    if (activeNumber && storedNumber && activeOperator) {
        switch (activeOperator) {
            case '+':
                storedNumber = parseFloat(storedNumber) + parseFloat(activeNumber);
                break;
            case '-':
                storedNumber = parseFloat(storedNumber) - parseFloat(activeNumber);
                break;
            case '*':
                storedNumber = parseFloat(storedNumber) * parseFloat(activeNumber);
                break;
            case '/':
                storedNumber = parseFloat(storedNumber) / parseFloat(activeNumber);
                break;
        }

    }
}