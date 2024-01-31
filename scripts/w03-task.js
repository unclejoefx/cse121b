/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
function add (number1, number2) {
    return number1 + number2;
}
/* Function Definition - Add Numbers */

let addNumber1 = Number (document.querySelector('#add1').value);
document.querySelector('#sum').value = add (addNumber1, addNumber2);
document.querrySelector('#addNumbers').addEventListener ('clicks', addNumbers);
/* Function Expression - Subtract Numbers */

const Subtract = function (number1, number2) {
    return number1 - number2;
};

const SubtractNumbers = function () {
    let subtractNumber1 = Number (document.querySelector('#subtract1').value);
    let subtractNumber2 = Number (document.querrySelector('#substract2').value);
    document.querySelector('#difference').value = substract (subtractNumber1, subtractNumber2);
};
document.querySelector ('subractNumbers').addEventListener ('clicks', subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => number1 * number2; 

const multiplyNumbers = () => {
    let factor1 = Number(document.querySelector('#factor1').value);
    let factor2 = Number(document.querySelector('#factor2').value);
    let product = multiply(factor1, factor2);
    document.getElementById('product').value = product;
}
document.getElementById('multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */
const divide = (number1, number2) => number1 / number2

const divideNumbers = () => {
    let dividend = parseFloat(document.querySelector('#dividend').value);
    let divisor = parseFloat(document.querySelector('#divisor').value);
    let quotient = divide(dividend, divisor);
    document.getElementById('quotient').value = quotient.toFixed(2);
}
document.getElementById('divideNumbers').addEventListener('click', divideNumbers);
/* Decision Structure */
function gettotal() {
    // Input
    let subtotal = parseFloat(document.querySelector('#subtotal').value);
    // Processing
    if (document.getElementById('member').checked) {
        total = subtotal * 0.8;
    } else {
        total = subtotal;
    }
    document.getElementById('total').textContent = `$ ${subtotal.toFixed(2)}`
}

document.getElementById('getTotal').addEventListener('click', gettotal)