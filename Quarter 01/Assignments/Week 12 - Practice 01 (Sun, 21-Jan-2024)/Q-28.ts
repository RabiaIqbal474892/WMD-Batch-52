/*
Q # 28

// Logic Building

// 28. Second-Largest Number
// Write a function to find the second-largest number in an array. Sort the array in descending order and retrieve the second element.
*/

// Function to find the second-largest number in an array
function findSecondLargest(numbers: number[]): number | undefined {
  // Check if the array has at least two elements
  if (numbers.length < 2) {
    return undefined; // Not enough elements to find the second-largest
  }

  // Sort the array in descending order
  const sortedArray = numbers.sort((a, b) => b - a);

  // Retrieve the second element
  const secondLargest = sortedArray[1];

  return secondLargest;
}

const numbersArray2: number[] = [5, 10, 3, 8, 15];
const secondLargestNumber = findSecondLargest(numbersArray2);

if (secondLargestNumber !== undefined) {
  console.log("Second-Largest Number:", secondLargestNumber);
} else {
  console.log("Not enough elements to find the second-largest number.");
}
