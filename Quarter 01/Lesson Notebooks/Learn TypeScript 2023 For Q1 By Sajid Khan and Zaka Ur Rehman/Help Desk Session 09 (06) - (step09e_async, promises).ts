//############################################################################

// Help Desk Session 09 - (step09a_functions, Callback function, step09b_function_optional_parameter, step09c_function_default_parameter, step09d_function_rest_parameter, step09e_async, callbacks, promises)

//   (https://www.youtube.com/watch?v=oacaX15qb-c&t=3s)

//############################################################################

// step09e_async

// promises

function fetchData() {
  return new Promise((resolve, reject) => {
    const data = "Data is fetched";

    setTimeout(() => {
      resolve(data);
    }, 1000);
  });
}

// // callback function
// function processData(data) {
//   console.log(data);
// }

console.log("before");
fetchData().then((data) => {
  console.log(data);
});
console.log("after");

//############################################################################

// promises

function fetchData2() {
  return new Promise((resolve, reject) => {
    let data = "some initial data"; // Set some initial value for data

    setTimeout(() => {
      if (data) resolve(data);
      // when the data is not received
      else reject("data is not fetched");
    }, 1000);
  });
}

// // callback function
// function processData(data) {
//   console.log(data);
// }

// .then when the data is fetched, .catch for reject case (data is not fetched)
// .finally (it will run always, in case of reject[catch] or [then])
console.log("before");
fetchData2()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("this will run always");
  });
console.log("after");

// jab promise return hta hai to ye object ma hta hai

//############################################################################

// promises

// In TypeScript, promises are a feature of the language that provides a clean and convenient way to work with asynchronous code. Promises represent a value that might be available now, or in the future, or never. They are commonly used to handle asynchronous operations such as fetching data from a server, reading a file, or any other operation that takes time.

// In TypeScript, the Promise<T> type is used to represent a promise that eventually produces a value of type T. Here's a basic example:

function fetchData4(): Promise<string> {
  return new Promise((resolve, reject) => {
    // Simulating an asynchronous operation, such as fetching data
    setTimeout(() => {
      const success = true; // Simulating a successful operation
      if (success) {
        resolve("Data fetched successfully");
      } else {
        reject("Error: Unable to fetch data");
      }
    }, 1000);
  });
}

// Using the promise
fetchData4()
  .then((data: string) => {
    console.log(data);
  })
  .catch((error: string) => {
    console.error(error);
  });

// In this example:
// The fetchData function returns a Promise<string>, indicating that it will eventually produce a string value.
// The Promise constructor is used to create a promise. Inside the constructor, you perform some asynchronous operation, and when it's complete, you call resolve with the result or reject with an error if something goes wrong.
// The .then() method is used to handle the successful resolution of the promise, and the .catch() method is used to handle any errors that occur during the promise execution.

// TypeScript provides type safety for promises, allowing you to specify the type of the resolved value and the type of the rejected value. This helps catch potential errors during development.

//############################################################################

// async
// async await

// async k lye hum us process ko he async define krn ge
// aur calling ma b usey async kr k bta dain ge k ye jo method hai
// isko async queue ma daln aur jab isko call kya jaye to ye process jab tak complete na ho
// process agey handover na krn agli statement ko

function fetchData3() {
  return new Promise((resolve, reject) => {
    let data = "some initial data"; // Set some initial value for data

    setTimeout(() => {
      if (data) resolve(data);
      // when the data is not received
      else reject("data is not fetched");
    }, 1000);
  });
}

// // callback function
// function processData(data) {
//   console.log(data);
// }

// fetchData2()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("this will run always");
//   });

// .then when the data is fetched, .catch for reject case (data is not fetched)
// .finally (it will run always, in case of reject[catch] or [then])
console.log("before");
(async function processData() {
  try {
    let data = await fetchData();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
})(); // () - invoke function
console.log("after");

//############################################################################

function delay(milliseconds: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, milliseconds);
  });
}

//Using `then`, `catch`, and `finally`:
delay(1000)
  .then(() => {
    console.log("The delay is over");
  })
  .catch((error) => {
    console.error("Something went wrong:", error);
  })
  .finally(() => {
    console.log("This is always executed");
  });

//Using `async/await`:
try {
  await delay(1000);
  console.log("Await: The delay is over");
} catch (error) {
  console.error("Await: Something went wrong:", error);
} finally {
  console.log("Await: This is always executed");
}

//Now Do Coding from the following Article
//https://blog.logrocket.com/async-await-in-typescript/

//Review the tutorial and convert the code in TypeScript
//https://www.codingame.com/playgrounds/347/javascript-promises-mastering-the-asynchronous/what-is-asynchronous-in-javascript
