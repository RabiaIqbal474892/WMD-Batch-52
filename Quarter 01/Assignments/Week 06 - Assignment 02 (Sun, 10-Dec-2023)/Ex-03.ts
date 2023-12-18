/*
Exercise 03:
Write a program that converts given number of days in to weeks and days such as 17 days = 2 weeks and 3 days.
*/

import PromptSync from "prompt-sync";

const prompt = PromptSync();

function convertDaysToWeeksAndDays() {
  // Take input from the user for converting given number of days in to weeks and days
  const noOfDaysStr = prompt("Enter the number of days: ");

  // Parse the input string into number
  const noOfDays = parseInt(noOfDaysStr);

  // Check if the input is valid
  if (isNaN(noOfDays) || noOfDays < 0) {
    console.log(
      "Invalid input. Please enter a valid non-negative number of days."
    );
    return;
  }

  // Calculate weeks and remaining days
  const weeks = Math.floor(noOfDays / 7);
  const remainingDays = noOfDays % 7;

  // Display the result
  console.log(`${noOfDays} days = ${weeks} weeks and ${remainingDays} days`);
}

// Run the program
convertDaysToWeeksAndDays();
