/*
Exercise 02:
Write a program that calculates the percentage.
*/

import PromptSync from "prompt-sync";

const prompt = PromptSync();

function calculatePercentage() {
  // Get input from the user for total marks and obtained marks

  const obtainedMarksStr = prompt("Enter obtained marks: ");
  const totalMarksStr = prompt("Enter total marks: ");

  // Parse input strings to numbers
  const totalMarks = parseFloat(totalMarksStr);
  const obtainedMarks = parseFloat(obtainedMarksStr);

  // Check if the input is valid
  if (isNaN(totalMarks) || isNaN(obtainedMarks)) {
    console.log("Invalid input. Please enter valid numbers.");
    return;
  }

  // Calculate the percentage
  const percentage = (obtainedMarks / totalMarks) * 100;

  // Display the result
  console.log(`Percentage: ${percentage.toFixed(2)}%`);
}

// Run the program
calculatePercentage();

export {};
