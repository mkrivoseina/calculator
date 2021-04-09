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
    activeOperator = operator;
    doMath();
    storedNumber = activeNumber;
    updateScreen();
    activeNumber = '';
    activeOperator = '';
}

function equalsIsPressed() {
    doMath();
    updateScreen();
    resultIs = activeNumber;
    storedNumber = '';
    activeOperator = '';
    activeNumber = '';
}

function clearScreen() {
    activeNumber = '';
    activeOperator = '';
    storedNumber = '';
    updateScreen();
}
function updateScreen() {
    document.getElementById('screen').innerHTML = activeNumber + activeOperator;
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
            case 'x':
                storedNumber = parseFloat(storedNumber) * parseFloat(activeNumber);
                break;
            case '/':
                storedNumber = parseFloat(storedNumber) / parseFloat(activeNumber);
                break;

        }

    }
}