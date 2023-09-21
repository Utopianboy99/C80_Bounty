# Calculator Website

This calculator website is a simple and user-friendly tool for performing basic arithmetic operations. It incorporates JavaScript classes, switch statements, and try-catch-finally statements to provide a smooth and error-handling calculator experience.

## How to Use

1. **Input Fields**: Enter numeric values in the "Enter first number" and "Enter second number" input fields.

2. **Operation Selection**: Choose an operation (Addition, Subtraction, Multiplication, or Division) from the dropdown menu.

3. **Calculate Button**: Click the "Calculate" button to perform the selected operation on the two input numbers.

4. **Result Display**: The result of the calculation will be displayed below the button.

5. **Error Handling**: If you attempt to divide by zero or select an invalid operation, an error message will appear instead of the result.

6. **Clear Fields**: After each calculation (successful or with an error), the input fields are cleared for your next calculation.

## Walkthrough

### Calculator Class

The calculator functionality is structured within a JavaScript class called `Calculator`. This class contains four static methods:

- `add(a, b)`: Returns the sum of two numbers.
- `subtract(a, b)`: Returns the result of subtracting the second number from the first.
- `multiply(a, b)`: Returns the product of two numbers.
- `divide(a, b)`: Handles division, ensuring that division by zero is caught and an error message is displayed.

### calculate Function

The `calculate` function is responsible for executing the calculations and displaying results or errors:

1. Input values for `num1`, `num2`, and the selected `operation` are retrieved from HTML elements.

2. A `try-catch` block is implemented for error handling:
   - Inside the `try` block, a `switch` statement determines the operation to perform based on the selected option.
   - If the operation is valid, the corresponding method from the `Calculator` class is called, and the result is displayed.
   - If an error occurs (e.g., division by zero or an invalid operation), the error message is caught and displayed.

3. Finally, after each calculation, successful or otherwise, the input fields are cleared, preparing for the next calculation.

This structured approach, employing classes, switch statements, and try-catch-finally statements, ensures accurate calculations and a smooth user experience, even in the presence of potential errors.

Use this calculator website to effortlessly perform basic arithmetic calculations. Enjoy a reliable and user-friendly tool!
