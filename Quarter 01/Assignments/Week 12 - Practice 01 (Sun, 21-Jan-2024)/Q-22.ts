/*
Q # 22

// Promises

// 22. Chained Promises
// Chain two promises to perform sequential asynchronous operations. Ensure that the second operation depends on the result of the first one.
*/

// First asynchronous operation returning a promise
function firstAsyncOperation(): Promise<number> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const result = 42; // Some result from the first operation
      resolve(result);
    }, 2000); // Simulating a 2 seconds delay
  });
}

// Second asynchronous operation depending on the result of the first one
function secondAsyncOperation(
  resultFromFirstOperation: number
): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const result = `Second operation using ${resultFromFirstOperation}`;
      resolve(result);
    }, 1000); // Simulating a 1-second delay
  });
}

// Chaining the promises for sequential operations
firstAsyncOperation()
  .then((result) => {
    // Result from the first operation
    console.log(`First operation result: ${result}`);

    // Returning the result to chain with the second operation
    return result;
  })
  .then((resultFromFirstOperation) => {
    // Perform the second operation using the result from the first one
    return secondAsyncOperation(resultFromFirstOperation);
  })
  .then((finalResult) => {
    // Final result after both operations
    console.log(`Final result: ${finalResult}`);
  })
  .catch((error) => {
    // Handle errors from any of the promises
    console.error(`Error occurred: ${error}`);
  });
