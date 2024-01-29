// Loops

// 18. Find Index in Array
// Use a loop to find the index of a specific element in an array. Iterate through the array and check for equality.

// Function to find the index of a specific element in an array
function findIndex(arr: number[], target: number): number {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i; // Return the index when the element is found
    }
  }
  return -1; // Return -1 if the element is not found in the array
}

const numbersArray: number[] = [5, 10, 15, 20, 25];
const targetNumber: number = 15;

const index = findIndex(numbersArray, targetNumber);

// Print the result
if (index !== -1) {
  console.log(`The index of ${targetNumber} is: ${index}`);
} else {
  console.log(`${targetNumber} not found in the array.`);
}
