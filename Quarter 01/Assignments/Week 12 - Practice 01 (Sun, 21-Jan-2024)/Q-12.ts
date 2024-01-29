/*
Q # 12

// Arrays

// 12. Concatenate Arrays
// Concatenate two arrays without modifying the original arrays. You can use the + operator for concatenation.
*/

function concatenateArrays<T>(arr1: T[], arr2: T[]): T[] {
  return [...arr1, ...arr2];
}

const array1: number[] = [1, 2, 3];
const array2: number[] = [4, 5, 6];

const concatenatedArray = concatenateArrays(array1, array2);

console.log("Original Array 1", array1);
console.log("Original Array 2", array2);
console.log("Concatednated Array: ", concatenatedArray);
