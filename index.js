const buttons = document.querySelectorAll('.calc-button');
const displayResult = document.getElementById('result');
// const displayInput = document.getElementById('expression');       // Реализовать маленький экран с операцией
let currentInput = '';
let operator = '';
let a = '';
let b = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;
        
        if (value === 'DEL') {                                    // Реализация отчистки экрана
            currentInput = '';
            operator = '';
            a = '';
            b = '';
            displayResult.value = '0';
            displayInput.value = '';

        } else if (['+', '-', '*', '/'].includes(value)) {         // Выбор операции и сохранение первого операнда 
            if (currentInput) {
                if (!a) {
                    a = currentInput;
                } else if (a && operator) {
                    b = currentInput;
                    a = getCalculation(a, b, operator);
                }
                operator = value;
                currentInput = '';
                displayResult.value = a + ' ' + operator;
            }
        } else if (value === '=') {                              // Выполенение расчетов
            if (currentInput && a) {
                b = currentInput;
                const result = getCalculation(a, b, operator);
                displayResult.value = result;
                currentInput = result;
                a = '';
                operator = '';
                b = '';            
            }
        } else {
            currentInput += value;
            displayResult.value = currentInput;
        }
    });
});

function getCalculation(a, b, operator) {                         // Функция выполнения операций
    let res = 0;
    const num1 = parseFloat(a);
    const num2 = parseFloat(b);

    switch (operator) {
        case '+':
            res = num1 + num2;
            break;
        case '-':
            res = num1 - num2;
            break;
        case '*':
            res = num1 * num2;
            break;
        case '/':
            res = num1 / num2;
            break;
    }
    return res;
};






