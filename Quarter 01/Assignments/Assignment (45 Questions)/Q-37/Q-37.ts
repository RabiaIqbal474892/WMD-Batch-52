/*
Q # 37
Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
*/

function makeShirt(
  size: string = "Large",
  message: string = "I love TypeScript"
): void {
  console.log(`Size: ${size}, Message: '${message}'`);
}

// Large shirt with default message
makeShirt(); // Output: Size: Large, Message: 'I love TypeScript'

// Medium shirt with default message
makeShirt(); // Output: Size: Medium, Message: 'I love TypeScript'

// Custom shirt with a different message and size
makeShirt("Small", "Hi, TypeScipt!"); // Output: Size: Small, Message: 'Hi, TypeScipt!'

// Another Method

type ShirtSize = "small" | "medium" | "large";

function makeShirt(
  size: ShirtSize = "large",
  message: string = "I love TypeScript"
): void {
  console.log(`Shirt Size: ${size}, Message: ${message}`);
}

// Make a large shirt with the default message
makeShirt();

// Make a medium shirt with the default message
makeShirt("medium");

// Make a shirt of any size with a different message
makeShirt("small", "Custom message for a small shirt");
