/*
Exercise 05:
Create a function that takes a positive integer as parameter and uses a for loop to calculate and return the factorial of that number.
*/

function calculateFactorial(n: number): number {
  // Check if the input is a positive integer
  if (n < 0 || !Number.isInteger(n)) {
    throw new Error("Input must be a positive integer.");
  }

  // Initialize factorial to 1
  let factorial = 1;

  // Calculate factorial using a for loop
  for (let i = 1; i <= n; i++) {
    factorial *= i;
  }

  return factorial;
}

// Example usage:
const inputNumber = 5;
const result = calculateFactorial(inputNumber);
console.log(`The factorial of ${inputNumber} is: ${result}`);
