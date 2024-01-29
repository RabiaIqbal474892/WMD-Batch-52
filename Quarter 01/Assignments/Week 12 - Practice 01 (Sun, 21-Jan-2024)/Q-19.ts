/*
Q # 19

// Callback Functions

// 19. setTimeout Callback
// Implement a callback function within a setTimeout to log a message after a delay. Be aware of the asynchronous nature of setTimeout.
*/

// Callback function to be executed after a delay
function delayedCallback() {
  console.log("Message logged after a delay!");
}

// Using setTimeout to introduce a delay (in milliseconds)
const delayInMilliseconds: number = 2000; // 2 seconds

setTimeout(delayedCallback, delayInMilliseconds);

console.log(
  "This message is logged immediately because setTimeout is asynchronous."
);
