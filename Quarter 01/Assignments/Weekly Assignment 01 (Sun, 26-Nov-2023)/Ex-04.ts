/*
Exercise 4: Write a program that checks if a given number is even or odd.
*/

function checkEvenOrOdd(numberCheck: number): string {
  if (numberCheck % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

const inputNumber: number = 5;
const result: string = checkEvenOrOdd(inputNumber);

console.log(`Given number is ${inputNumber} which is ${result}.`);

// Another Method

let myNum: number = 2;
if (myNum % 2 == 0) {
  console.log("Number is even");
} else {
  console.log("Number is odd");
}

// Another Method with arrow function

const evenOrOdd = (num: number) => {
  if (num % 2 === 0) {
    return console.log(`${num} is an even number`);
  } else {
    return console.log(`${num} is not an even number`);
  }
};
