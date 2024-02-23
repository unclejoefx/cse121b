/* FUNCTIONS */

/* Function Definition - Add Numbers */
function add(number1, number2) {
    return number1 + number2;
}

function addNumbers() {
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
    document.querySelector('#sum').value = add(addNumber1, addNumber2);
}

document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */
const subtract = function (number1, number2) {
    return number1 - number2;
};

const subtractNumbers = function () {
    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);
    document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
};

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => number1 * number2;

const multiplyNumbers = () => {
    let factor1 = Number(document.querySelector('#factor1').value);
    let factor2 = Number(document.querySelector('#factor2').value);
    let product = multiply(factor1, factor2);
    document.getElementById('product').value = product;
};

document.getElementById('multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */
const divide = (number1, number2) => number1 / number2;

const divideNumbers = () => {
    let dividend = parseFloat(document.querySelector('#dividend').value);
    let divisor = parseFloat(document.querySelector('#divisor').value);
    let quotient = divide(dividend, divisor);
    document.getElementById('quotient').value = quotient.toFixed(2);
};

document.getElementById('divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */
function getTotal() {
    // Input
    let subtotal = parseFloat(document.querySelector('#subtotal').value);
    // Processing
    let total;
    if (document.getElementById('member').checked) {
        total = subtotal * 0.8;
    } else {
        total = subtotal;
    }
    document.getElementById('total').textContent = `$ ${total.toFixed(2)}`;
}

document.getElementById('getTotal').addEventListener('click', getTotal);

/* Array Methods */
const sourceArray = [3, 7, 1, 4, 6, 9, 2, 8, 5];

document.getElementById('array').textContent = sourceArray.join(', ');

const odds = sourceArray.filter(number => number % 2 !== 0);
document.getElementById('odds').textContent = odds.join(', ');

const evens = sourceArray.filter(number => number % 2 === 0);
document.getElementById('evens').textContent = evens.join(', ');

const sumOfArray = sourceArray.reduce((acc, number) => acc + number, 0);
document.getElementById('sumOfArray').textContent = sumOfArray;

const multiplied = sourceArray.map(number => number * 2);
document.getElementById('multiplied').textContent = multiplied.join(', ');

const sumOfMultiplied = multiplied.reduce((acc, number) => acc + number, 0);
document.getElementById('sumOfMultiplied').textContent = sumOfMultiplied;
