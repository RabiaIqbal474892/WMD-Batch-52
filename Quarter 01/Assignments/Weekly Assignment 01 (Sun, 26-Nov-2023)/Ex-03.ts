/*
Exercise 3: Write a program that checks if a given number is positive, negative, or zero.
*/

function checknumber(numberCheck: number): string {
  if (numberCheck > 0) {
    return "Postive";
  } else if (numberCheck < 0) {
    return "Negative";
  } else {
    return "Zero";
  }
}

const inputNumber: number = 9;
const result: string = checknumber(inputNumber);

console.log(`Given number is ${inputNumber} which is ${result}.`);

// Another Method with arrow function

const checkNumber = (num: number) => {
  if (num > 0) {
    console.log(`Number ${num} is Positive`);
  } else if (num < 0) {
    console.log(`Number ${num} is Negative`);
  } else {
    return console.log(`Number is Zero`);
  }
};

checkNumber(1);
checkNumber(-6);
checkNumber(0);

export{};
