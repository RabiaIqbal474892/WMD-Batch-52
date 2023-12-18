/*
Exercise 08:
Write a program that checks if the given year is leap year or not.
*/

import PromptSync from "prompt-sync";

const prompt = PromptSync();

function isLeapYear(year: number): boolean {
  // Leap year conditions: divisible by 4 and not divisible by 100 unless also divisible by 400
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

function checkLeapYear(): void {
  const userInput = prompt("Enter a year: ");

  if (userInput === null || userInput.trim() === "") {
    console.log("Please enter a valid year.");
    return;
  }

  const inputYear = parseInt(userInput);

  if (isNaN(inputYear) || inputYear <= 0) {
    console.log("Invalid input. Please enter a valid positive year.");
    return;
  }

  const leapYearMessage = isLeapYear(inputYear)
    ? `${inputYear} is a leap year.`
    : `${inputYear} is not a leap year.`;

  console.log(leapYearMessage);
}

// Run the program
checkLeapYear();
