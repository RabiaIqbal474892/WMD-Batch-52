/*
Q # 21

// Promises

// 21. Delayed Promise
// Build a promise that resolves with a message after a delay. Use the async and await keywords for asynchronous operations.
*/

// Function that returns a promise with a delayed resolution
function delayedPromise(delay: number): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Promise resolved after delay");
    }, delay);
  });
}

// Example usage with async/await
async function asyncOperation21() {
  console.log("Start of async operation");

  // Wait for the promise to resolve using await
  const result = await delayedPromise(2000); // 2 seconds delay

  // Once the promise is resolved, log the result
  console.log(result);

  console.log("End of async operation");
}

// Call the async operation
asyncOperation21();
