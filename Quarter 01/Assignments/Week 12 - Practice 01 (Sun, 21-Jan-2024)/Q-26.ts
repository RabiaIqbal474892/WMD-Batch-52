// Advanced Topics

// 26. Rest Parameters
// Write a function that uses rest parameters to calculate the sum of an arbitrary number of arguments. This allows flexibility in the number of arguments.

// Function using rest parameters to calculate the sum
function calculateSum(...numbers: number[]): number {
  return numbers.reduce((sum, current) => sum + current, 0);
}

const sum1 = calculateSum(1, 2, 3, 4, 5);
console.log("Sum 1:", sum1); // Output: 15

const sum2 = calculateSum(10, 20, 30);
console.log("Sum 2:", sum2); // Output: 60
