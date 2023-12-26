/*
Exercise 06:
Write a program having an array of numbers if the number is negative it should remove the negative number from the array.
*/

function removeNegativeNumbers(arr: number[]): number[] {
  // Use filter to create a new array with only non-negative numbers
  const nonNegativeArray = arr.filter((num) => num >= 0);
  return nonNegativeArray;
}

// Example usage:
const numbersArray = [1, -2, 3, -4, 5, -6];
const resultArray = removeNegativeNumbers(numbersArray);

console.log("Original Array:", numbersArray);
console.log("Array with Negative Numbers Removed:", resultArray);
