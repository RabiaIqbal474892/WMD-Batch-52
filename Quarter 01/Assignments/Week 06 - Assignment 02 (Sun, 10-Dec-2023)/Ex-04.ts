/*
Exercise 04:
Write a program that calculates the discount for a product based on its price. If the price is above $100, apply a 10% discount; otherwise, apply a 5% discount.
*/

import PromptSync from "prompt-sync";

const prompt = PromptSync();

// If the price is above $100, apply a 10% discount; otherwise, apply a 5% discount.
function calculateDiscount(price: number): number {
  const discountPercentage = price > 100 ? 0.1 : 0.05;
  const discount = price * discountPercentage;
  return discount;
}

function applyDiscount(): void {
  const userInput = prompt("Enter the product price: ");

  if (userInput === null || userInput.trim() === "") {
    console.log("Please enter a valid price.");
    return;
  }

  const price = parseFloat(userInput);

  if (isNaN(price) || price < 0) {
    console.log("Invalid input. Please enter a valid number.");
    return;
  }

  const discount = calculateDiscount(price);
  const discountedPrice = price - discount;

  console.log(`Original Price: $${price.toFixed(2)}`);
  console.log(`Discount Percentage: ${calculateDiscount(price) * 100}%`);
  console.log(`Discount Percentage: ${discount * 100}%`);
  console.log(`Discount Amount: $${discount.toFixed(2)}`);
  console.log(`Discounted Price: $${discountedPrice.toFixed(2)}`);
}

// Run the program
applyDiscount();
