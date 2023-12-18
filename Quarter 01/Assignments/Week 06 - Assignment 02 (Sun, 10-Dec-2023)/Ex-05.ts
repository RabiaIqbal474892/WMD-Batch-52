/*
Exercise 05:
Create a program that determines the category of a user-provided age. If the age is between 0 and 12, print "Child." If it's between 13 and 19, print "Teenager." Otherwise, print "Adult."
*/

import PromptSync from "prompt-sync";

const prompt = PromptSync();

function determineCategory(age: number): string {
  if (age >= 0 && age <= 12) {
    return "Child";
  } else if (age >= 13 && age <= 19) {
    return "Teenager";
  } else {
    return "Adult";
  }
}

function categorizeUser(): void {
  const userInput = prompt("Enter your age: ");

  if (userInput === null || userInput.trim() === "") {
    console.log("Please enter a valid age.");
    return;
  }

  const age = parseInt(userInput);

  if (isNaN(age) || age < 0) {
    console.log("Invalid input. Please enter a valid number.");
    return;
  }

  const category = determineCategory(age);
  console.log(`Based on your age, you are a: ${category}.`);
}

// Run the program
categorizeUser();
