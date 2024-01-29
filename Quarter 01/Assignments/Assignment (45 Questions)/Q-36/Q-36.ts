/*
Q # 36
T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
*/

// Defining a function that accepts a size and the text of a message that should be printed on the Shirt.

const makeShirt = (size: string, message: string): void => {
  console.log(`Size: ${size}, Message: '${message}'`);
};

/*
const makeShirt = (size: string, message: string): string => {
  console.log(`Size: ${size}, Message: '${message}'`);
  return `Size: ${size}, Message: '${message}'`;
};
*/

// Call the function

// Call the function with the size and the message variables.
let size: string = "Medium";
let message: string = "Muhammad Umar 313";

makeShirt(size, message);

// Directly call the function

makeShirt("Large", "Muhammad Usman");
makeShirt("Large", "Typescript");

// Another Method

function makeShirt(size: string, message: string): void {
  console.log(`Shirt size: ${size}, Message: ${message}`);
}

// Example usage of the makeShirt function
makeShirt("Large", "Hello, World!");
