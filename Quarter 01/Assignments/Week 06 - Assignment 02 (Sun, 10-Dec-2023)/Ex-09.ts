/*
Exercise 09:
Develop a program that determines the day of the week. Ask the user for a number (1-7) and use nested if statements to print the corresponding day's name.
*/

import PromptSync from "prompt-sync";

const prompt = PromptSync();

function getDayOfWeek(dayNumber: number): string {
  switch (dayNumber) {
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    case 7:
      return "Sunday";
    default:
      return "Invalid day number. Please enter a number between 1 and 7.";
  }
}

function determineDayOfWeek(): void {
  const userInput = prompt("Enter a number (1-7) to get the day of the week: ");

  if (userInput === null || userInput.trim() === "") {
    console.log("Please enter a valid number.");
    return;
  }

  const dayNumber = parseInt(userInput);

  if (isNaN(dayNumber) || dayNumber < 1 || dayNumber > 7) {
    console.log("Invalid input. Please enter a number between 1 and 7.");
    return;
  }

  const dayOfWeek = getDayOfWeek(dayNumber);
  console.log(`Day of the week: ${dayOfWeek}`);
}

// Run the program
determineDayOfWeek();
