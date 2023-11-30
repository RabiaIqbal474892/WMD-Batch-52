/*
Exercise 6: Write a program that calculates the result of a mathematical expression.	((10 + 5) * 3 - 2) / (4 % 3)  - 7)
*/

function calculateExpression(): number {
  const result = ((10 + 5) * 3 - 2) / (4 % 3) - 7;
  return result;
}

// Calculate and print the result
const expressionResult: number = calculateExpression();
console.log(`Result of the expression is: ${expressionResult}`);
