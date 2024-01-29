// Advanced Topics

// 24. Default Parameter
// Implement a function with a default parameter. This provides a default value if the parameter is not explicitly provided.

// Function with a default parameter
function greet(name: string = "Guest"): string {
  return `Hi, ${name}!`;
}

// Example usage without providing the parameter
const greetingWithoutName = greet();
console.log(greetingWithoutName); // Output: Hi, Guest!

// Example usage providing a parameter
const greetingWithName = greet("Rabiaa");
console.log(greetingWithName); // Output: Hi, Rabiaa!
