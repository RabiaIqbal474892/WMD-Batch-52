// The conversion factor for kilometers to miles
let kilometersToMiles = 1.60934;

// Ask user for data in kilometers
let kilometers = prompt("Please enter the distance in kilometers.");
console.log(kilometers, " kilometers");

// Convert kilometers to miles
let miles = kilometers / kilometersToMiles;
console.log(miles, "miles");

let sentence = "The distance of " + kilometers + " kms is equal to " + miles + " miles.";
console.log(sentence);
