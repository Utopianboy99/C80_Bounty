
class Calculator {
    static add(a, b) {
        return a + b;
    }

    static subtract(a, b) {
        return a - b;
    }

    static multiply(a, b) {
        return a * b;
    }

    static divide(a, b) {
        if (b === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        return a / b;
    }
}

function calculate() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operation = document.getElementById('operation').value;

    try {
        let result;
        switch (operation) {
            case 'add':
                result = Calculator.add(num1, num2);
                break;
            case 'subtract':
                result = Calculator.subtract(num1, num2);
                break;
            case 'multiply':
                result = Calculator.multiply(num1, num2);
                break;
            case 'divide':
                result = Calculator.divide(num1, num2);
                break;
            default:
                throw new Error("Invalid operation selected.");
        }

        document.getElementById('result').textContent = `Result: ${result}`;
    } catch (error) {
        document.getElementById('result').textContent = `Error: ${error.message}`;
    } finally {
        // Clear input fields
        document.getElementById('num1').value = '';
        document.getElementById('num2').value = '';
    }
}
