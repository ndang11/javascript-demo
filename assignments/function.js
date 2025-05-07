//Create a function calculate(a, operator, b) that supports +, -, *, and /

function calculate(a, operator, b) {
    if (operator === '+') {
      return a + b;
    } else if (operator === '-') {
      return a - b;
    } else if (operator === '*') {
      return a * b;
    } else if (operator === '/') {
      return b !== 0 ? a / b : "Cannot divide by zero";
    } else {
      return "Unsupported operator";
    }
  }
  