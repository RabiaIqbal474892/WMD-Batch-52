/*
Exercise 08:
Implement a program that takes a list of temperatures in Celsius as input from the user. Convert each temperature to Fahrenheit using the formula F = (C * 9/5) + 32 and store the converted temperatures in an array. Use a for loop to perform the conversion for each temperature.
*/

import * as readlineSync from "readline-sync";

// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius: number): number {
  return (celsius * 9) / 5 + 32;
}

// Function to take user input for temperatures
function getUserTemperatures(): number[] {
  const numberOfTemperatures = readlineSync.questionInt(
    "Enter the number of temperatures: "
  );

  const temperatures: number[] = [];
  for (let i = 0; i < numberOfTemperatures; i++) {
    const temperature = readlineSync.questionFloat(
      `Enter temperature ${i + 1} in Celsius: `
    );
    temperatures.push(temperature);
  }

  return temperatures;
}

// Main program
function main() {
  const celsiusTemperatures = getUserTemperatures();

  // Convert temperatures to Fahrenheit using a for loop
  const fahrenheitTemperatures: number[] = [];
  for (let i = 0; i < celsiusTemperatures.length; i++) {
    const celsius = celsiusTemperatures[i];
    const fahrenheit = celsiusToFahrenheit(celsius);
    fahrenheitTemperatures.push(fahrenheit);
  }

  // Display the converted temperatures
  console.log("\nConverted Temperatures:");
  for (let i = 0; i < fahrenheitTemperatures.length; i++) {
    console.log(`Temperature ${i + 1}: ${fahrenheitTemperatures[i]} °F`);
  }
}

// Run the program
main();
