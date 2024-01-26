//############################################################################

// Help Desk Session 09 - (step09a_functions, Callback function, step09b_function_optional_parameter, step09c_function_default_parameter, step09d_function_rest_parameter, step09e_async, callbacks, promises)

//   (https://www.youtube.com/watch?v=oacaX15qb-c&t=3s)

//############################################################################

// step09e_async

// callbacks
// essence of using callbacks in asynchronous operations
// a logic - for example, file read krni hai
// jab tak wo file read nai hojati, wo process hmein agey nai jane de ga
// hm uske lye callback functionality bna lete hain
// is functionality k through process hta rahe ga
// jab process complete hojae ga to hmein uska return result mil jaye ga
// baki execution hmare code ki chalti rahe gi
// it is a sort of method, wo independently isko deal kr le, jab process complete hojae to wo hmein return ma result de de(pass kr de), jo passing value hai iski

// callback ki wja se hmare pass asynchronous code hta hai

// essence of using callbacks in asynchronous operations. Let's break it down with an example of reading a file in Node.js, where file reading is an asynchronous operation.

import * as fs from "fs";

// Function to read a file asynchronously with a callback
function readFileAsync(
  path: string,
  callback: (error: Error | null, data?: string) => void
): void {
  fs.readFile(path, "utf8", (err, data) => {
    if (err) {
      // If an error occurs, pass the error to the callback
      callback(err);
    } else {
      // If successful, pass the data to the callback
      callback(null, data);
    }
  });
}

// Callback function to handle the result
function handleFileRead(error: Error | null, data?: string): void {
  if (error) {
    console.error("Error reading file:", error.message);
  } else {
    console.log("File content:", data);
  }
}

// Example usage
const filePath = "example.txt";

// Trigger file reading with the provided callback
readFileAsync(filePath, handleFileRead);

// Code execution continues here while the file reading is in progress
console.log("File reading operation initiated...");

// In this example:

// readFileAsync is a function that reads a file asynchronously. It takes a file path and a callback function as parameters.

// The fs.readFile function is used to read the file asynchronously. It has its own callback, where we check for errors. If there's an error, we pass it to the callback; otherwise, we pass the data to the callback.

// handleFileRead is the callback function that will be executed when the file reading is complete. It checks for errors and processes the data.

// The readFileAsync function is called with the file path and the handleFileRead callback. Code execution continues after triggering the file reading operation, demonstrating the asynchronous nature of the operation.

// Callbacks are a fundamental concept in handling asynchronous operations, and they provide a way to continue with other tasks while waiting for the asynchronous operation to complete.

//############################################################################

// fetchData(processData), ye callback ma receive hua, function fetchData(callback)
// fetchData 1 function hai, jo database se kch le k aye ga
// data lane k lye wo 1 second ki delay k lye wait kre ga

function fetchData(callback) {
  const data = "Data is fetched";
  setTimeout(() => {
    callback(data);
  }, 1000);
}

// callback function
function processData(data) {
  console.log(data);
}

console.log("before");
fetchData(processData); // jab hum function pass krn, this phenomenon is known as callback
console.log("after");

// the main drawback of callback is callback hell

//############################################################################

function myCallBack(text: string) {
  console.log("inside myCallback " + text);
}

function callingFunction(
  initialText: string,
  callback: (text: string) => void
) {
  callback(initialText);
}

callingFunction("myText", myCallBack);
