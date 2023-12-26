/*
Exercise 07:
Create a function that takes an array of numbers as parameter. Use a for loop to calculate and return the sum of all the numbers in the array.
*/

function calculateSum(numbers: number[]): number {
  let sum = 0;

  // Use a for loop to iterate through the array and calculate the sum
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  return sum;
}

// Example usage:
const numbersArray = [1, 2, 3, 4, 5];
const sumResult = calculateSum(numbersArray);

console.log("Array:", numbersArray);
console.log("Sum of Array Elements:", sumResult);
