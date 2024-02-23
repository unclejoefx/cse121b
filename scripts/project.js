let transactions = [];

function addTransaction() {
    const text = document.getElementById('text').value;
    const amount = parseFloat(document.getElementById('amount').value);

    if (text.trim() === '' || isNaN(amount)) {
        alert('Please add a valid text and amount');
        return;
    }

    const transaction = {
        id: generateID(),
        text,
        amount
    };

    transactions.push(transaction);

    addTransactionDOM(transaction);

    updateValues();

    document.getElementById('text').value = '';
    document.getElementById('amount').value = '';
}

function generateID() {
    return Math.floor(Math.random() * 100000000);
}

function addTransactionDOM(transaction) {
    const list = document.getElementById('transaction-list');
    const sign = transaction.amount < 0 ? '-' : '+';

    const item = document.createElement('li');
    item.classList.add(transaction.amount < 0 ? 'minus' : 'plus');
    item.innerHTML = `${transaction.text} <span>${sign}$${Math.abs(transaction.amount)}</span>`;
    list.appendChild(item);
}

function updateValues() {
    const balance = document.getElementById('balance');
    const moneyPlus = document.getElementById('money-plus');
    const moneyMinus = document.getElementById('money-minus');

    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((acc, item) => acc + item, 0).toFixed(2);
    const income = amounts.filter(item => item > 0).reduce((acc, item) => acc + item, 0).toFixed(2);
    const expense = amounts.filter(item => item < 0).reduce((acc, item) => acc + item, 0).toFixed(2);

    balance.innerText = `$${total}`;
    moneyPlus.innerText = `$${income}`;
    moneyMinus.innerText = `$${expense}`;
}

// Initialize the year in the footer
document.getElementById("year").innerHTML = new Date().getFullYear();
