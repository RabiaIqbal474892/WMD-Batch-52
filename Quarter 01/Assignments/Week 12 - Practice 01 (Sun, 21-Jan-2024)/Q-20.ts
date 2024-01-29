/*
Q # 20

// Callback Functions

// 20. Callback Invocation
// Create a function that takes a callback and invokes it with a provided value. This demonstrates the concept of higher-order functions.
*/

// Function that takes a callback and invokes it with a provided value
function invokeCallback(
  callback: (value: number) => void,
  value: number
): void {
  callback(value);
}

function callbackFunction(value: number): void {
  console.log(`Callback invoked with value: ${value}`);
}

// Invoke the callback function with a provided value
invokeCallback(callbackFunction, 42);
