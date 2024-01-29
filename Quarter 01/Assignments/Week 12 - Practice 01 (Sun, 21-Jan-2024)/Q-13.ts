// Array Methods

// 13. Filter Even Numbers
// Use the filter method to get an array of even numbers from a given array. Utilize a lambda function as the filtering condition.

function getEvenNumbers(numbers: number[]): number[] {
  return numbers.filter((num) => num % 2 === 0);
}

const originalArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbersArray = getEvenNumbers(originalArray);

console.log("Original Array: ", originalArray);
console.log("Even Numbers Array: ", evenNumbersArray);
