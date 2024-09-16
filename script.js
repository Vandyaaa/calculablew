
function appendValue(value) {
    document.getElementById('result').value += value;
    updateExpression();
}

function clearResult() {
    document.getElementById('result').value = '';
    document.getElementById('expression').textContent = '';
}

function deleteLast() {
    var result = document.getElementById('result');
    result.value = result.value.slice(0, -1);
    updateExpression();
    
}

function calculateResult() {
    var expression = document.getElementById('result').value;
    var result = eval(expression);
    document.getElementById('expression').textContent = expression + ' =';
    document.getElementById('result').value = result;
}

function updateExpression() {
    var currentExpression = document.getElementById('result').value;
    document.getElementById('expression').textContent = currentExpression + ' =';
}
