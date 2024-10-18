// The conversion factor for miles to kilometers
let milesToKilometers = 1.60934;

// Ask user for data in miles
let miles = prompt("Please enter the distance in miles.");
console.log(miles, " miles");

// Use the conversion factor to multiply miles into kilometers
let kilometers = miles * milesToKilometers;
console.log(kilometers, "kilometers");

let sentence = "The distance of " + miles + " kms is equal to " + kilometers + " miles."
console.log(sentence);
