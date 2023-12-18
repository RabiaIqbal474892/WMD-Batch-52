/*
Exercise 01:
Write a program to convert the temperature from Celsius to Fahrenheit and vice verse.
*/

import promptSync from "prompt-sync";

const prompt = promptSync();

function convertToCelsius(fahrenheit: number): number {
  return (fahrenheit - 32) * (5 / 9);
}

function convertToFahrenheit(celsius: number): number {
  return (celsius * 9) / 5 + 32;
}

function temperatureConverter() {
  const userInput = prompt("Enter temperature: ");

  if (userInput === null || userInput.trim() === "") {
    console.log("Please enter a valid temperature.");
    return;
  }

  const temperature = parseFloat(userInput);

  if (isNaN(temperature)) {
    console.log("Invalid input. Please enter a valid number.");
    return;
  }

  const celsius = convertToCelsius(temperature);
  const fahrenheit = convertToFahrenheit(temperature);

  console.log(`Temperature in Celsius: ${celsius.toFixed(2)}°C`);
  console.log(`Temperature in Fahrenheit: ${fahrenheit.toFixed(2)}°F`);
}

// Run the temperature converter program
temperatureConverter();

export {};
