/*
Q # 23

// Promises

// 23. Concurrent Promises
// Use Promise.all to handle multiple promises concurrently. This can improve the efficiency of asynchronous operations.
*/

// Asynchronous function simulating an operation that returns a promise
function asyncOperation23(value: number, delay: number): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const result = `Async operation with value ${value}`;
      resolve(result);
    }, delay);
  });
}

// Array of values for concurrent asynchronous operations
const values: number[] = [1, 2, 3];

// Create an array of promises using the asyncOperation function
const promises: Promise<string>[] = values.map((value) =>
  asyncOperation23(value, 1000)
);

// Use Promise.all to handle the promises concurrently
Promise.all(promises)
  .then((results) => {
    // All promises have been fulfilled, and results is an array of the resolved values
    console.log("Concurrent results:", results);
  })
  .catch((error) => {
    // Handle errors from any of the promises
    console.error(`Error occurred: ${error}`);
  });
