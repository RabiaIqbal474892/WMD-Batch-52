/*
Q # 15

// Array Methods

// 15. Positive Elements Check
// Write a function that checks if all elements in an array are positive using the every method.
*/

function areAllPositive(numbers: number[]): boolean {
  return numbers.every((num) => num > 0);
}

const positiveNumbersArray: number[] = [3, 8, 12, 5];
const mixedNumbersArray: number[] = [2, -4, 6, 1];

console.log(
  "All elements positive in the first array",
  areAllPositive(positiveNumbersArray)
); // Output: true
console.log(
  "All elements positive in the second array",
  areAllPositive(mixedNumbersArray)
); // Output: false
