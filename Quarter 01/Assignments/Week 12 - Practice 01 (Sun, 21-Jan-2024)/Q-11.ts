// Arrays

// 11. Average of Numbers in Array
// Write a function to find the average value of numbers in an array. Sum the elements and divide by the length of the array.

function calculateAverage(numbers: number[]): number {
  if (numbers.length === 0) {
    console.warn("Warning: Empty array provided. Returning 0 as the average.");
    return 0;
  }

  // The callback function (acc, num) => acc + num is used to add each element (num) to the accumulator (acc).
  // The initial value of the accumulator is set to 0 (0).

  // Calculate the sum of numbers
  const sum = numbers.reduce((acc, num) => acc + num, 0);

  // Calculate the average
  const average = sum / numbers.length;

  return average;
}

const numberArray = [5, 10, 15, 20, 25];
const result = calculateAverage(numberArray);
