// Advanced Topics

// 25. Sort Objects by Property
// Create an array of objects and sort them based on a specific property. Utilize the sorted function and a lambda function as the key.

// Array of objects with a 'name' property
const arrayOfObjects: { name: string; age: number }[] = [
  { name: "Ahmad", age: 30 },
  { name: "Umar", age: 25 },
  { name: "Usman", age: 35 },
];

// Sort the array of objects based on the 'name' property using the sort function
const sortedArray = arrayOfObjects.sort((a, b) => a.name.localeCompare(b.name));

// Print the sorted array
console.log("Sorted Array by Name:");
console.log(sortedArray);
