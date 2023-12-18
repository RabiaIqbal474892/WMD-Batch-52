/*
Exercise 10:
Write a program that takes the number of units consumed by a user if it is greater than 100 then add 10% tax if greater than 200 then add 15% of tax so on up to if greater than 500 then add 25% of tax.
Where the tax amount will be calculated by the amount of bill.
*/

import PromptSync from "prompt-sync";

const prompt = PromptSync();

function calculateTax(units: number): number {
  let taxRate = 0;

  if (units > 500) {
    taxRate = 0.25;
  } else if (units > 200) {
    taxRate = 0.15;
  } else if (units > 100) {
    taxRate = 0.1;
  }

  return units * taxRate;
}

function calculateBill(units: number): number {
  const baseRate = 2; // Assuming a base rate per unit

  const tax = calculateTax(units);
  const totalBill = units * baseRate + tax;

  return totalBill;
}

function main() {
  const unitsConsumed = parseFloat(
    prompt("Enter the number of units consumed: ")
  );

  if (isNaN(unitsConsumed) || unitsConsumed < 0) {
    console.log("Invalid input. Please enter a valid number of units.");
    return;
  }

  const billAmount = calculateBill(unitsConsumed);

  console.log(
    `Bill amount for ${unitsConsumed} units: $${billAmount.toFixed(2)}`
  );
}

// Run the program
main();
