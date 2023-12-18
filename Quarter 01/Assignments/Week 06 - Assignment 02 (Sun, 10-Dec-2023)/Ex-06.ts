/*
Exercise 06:
Write a program that takes temperature and check it. If it is cold then suggest the user to wear warm clothes and so on according to the weather.
*/

import PromptSync from "prompt-sync";

const prompt = PromptSync();

function suggestClothing(temperature: number): string {
  if (temperature < 0) {
    return "It's very cold. Wear heavy winter clothes, gloves, and a hat.";
  } else if (temperature >= 0 && temperature < 10) {
    return "It's cold. Wear a winter coat, scarf, and gloves.";
  } else if (temperature >= 10 && temperature < 20) {
    return "It's cool. A light jacket or sweater should be fine.";
  } else if (temperature >= 20 && temperature < 30) {
    return "It's mild. Wear a t-shirt or a light layer.";
  } else {
    return "It's warm. You can wear shorts and a t-shirt.";
  }
}

function provideClothingAdvice(): void {
  const userInput = prompt("Enter the temperature in Celsius: ");

  if (userInput === null || userInput.trim() === "") {
    console.log("Please enter a valid temperature.");
    return;
  }

  const temperature = parseFloat(userInput);

  if (isNaN(temperature)) {
    console.log("Invalid input. Please enter a valid number.");
    return;
  }

  const advice = suggestClothing(temperature);
  console.log(
    `Based on the ${temperature} temperature, it is suggested: ${advice}`
  );
}

// Run the program
provideClothingAdvice();
