/*
Exercise 04:
Write a program that uses a for loop to print the first 10 even numbers.
*/

// Function to print the first 10 even numbers
function printFirst10EvenNumbers(): void {
  for (let i = 2; i <= 20; i += 2) {
    console.log(i);
  }
}

// Call the function to print the first 10 even numbers
printFirst10EvenNumbers();
