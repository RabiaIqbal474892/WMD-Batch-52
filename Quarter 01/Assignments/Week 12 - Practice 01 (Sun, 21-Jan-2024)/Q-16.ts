/*
Q # 16

// Loops

// 16. For Loop
// Create a for loop to print numbers from 1 to 5. Use the range function to generate the numbers.
*/

// Range function to generate an array of numbers within a specified range
function range(start: number, end: number): number[] {
  const result: number[] = [];
  for (let i = start; i <= end; i++) {
    result.push(i);
  }
  return result;
}

// Print numbers from 1 to 5
const numbers = range(1, 5);

// Print the numbers using a for loop
console.log("Numbers from 1 to 5:");
for (const number of numbers) {
  console.log(number);
}
