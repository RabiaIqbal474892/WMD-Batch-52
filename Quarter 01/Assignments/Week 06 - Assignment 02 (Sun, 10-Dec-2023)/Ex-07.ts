/*
Exercise 07:
Write a program that checks if the given number is divisible by 3 or 5 or both or not divisible by anyone show output accordingly.
*/

import PromptSync from "prompt-sync";

const prompt = PromptSync();

function checkDivisibility(num: number): string {
  if (num % 3 === 0 && num % 5 === 0) {
    return `${num} is divisible by both 3 and 5.`;
  } else if (num % 3 === 0) {
    return `${num} is divisible by 3.`;
  } else if (num % 5 === 0) {
    return `${num} is divisible by 5.`;
  } else {
    return `${num} is not divisible by 3 or 5.`;
  }
}

function provideDivisibilityCheck(): void {
  const userInput = prompt("Enter a number: ");

  if (userInput === null || userInput.trim() === "") {
    console.log("Please enter a valid number.");
    return;
  }

  const number = parseFloat(userInput);

  if (isNaN(number)) {
    console.log("Invalid input. Please enter a valid number.");
    return;
  }

  const result = checkDivisibility(number);
  console.log(result);
}

// Run the program
provideDivisibilityCheck();
