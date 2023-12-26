/*
Exercise 01:
Create a function that takes an array, an index, and a value as parameters. Inside the function, use the splice method to insert the value at the specified index in the array. Return the modified array.
*/

function insertValueAtIndex<T>(arr: T[], index: number, value: T): T[] {
  // Make a copy of the array to avoid modifying the original array
  const newArray = [...arr];

  // Use splice to insert the value at the specified index
  newArray.splice(index, 0, value);

  // Return the modified array
  return newArray;
}

// Example usage:
const originalArray = [1, 2, 3, 4, 5];
const modifiedArray = insertValueAtIndex(originalArray, 2, 99);

console.log("Original Array:", originalArray);
console.log("Modified Array:", modifiedArray);
