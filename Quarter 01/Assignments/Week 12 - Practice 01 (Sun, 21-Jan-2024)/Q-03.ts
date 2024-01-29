// Basics

// 3. Even or Odd Check
// Implement a conditional statement to check if a given number is even or odd. Consider using the modulus operator % for this task.

function checkEvenOrOdd(number: number): string {
  if (number % 2 == 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

const num1 = 10;
const num2 = 3;

console.log(`${num1} is ${checkEvenOrOdd(num1)}`);
console.log(`${num2} is ${checkEvenOrOdd(num2)}`);
