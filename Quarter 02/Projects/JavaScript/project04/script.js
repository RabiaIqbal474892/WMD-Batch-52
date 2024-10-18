// BMI Calculator
// Set values for height in inches and weight in pounds, then convert the values to centimeters and kilos, outputting the results to the console:
// - 1 inch is equal to 2.54 cm
// - 2.2046 pounds is equal to 1 kilo
// Output the results. Then, calculate and log the BMI: this is equal to weight (in kilos) divided by squared height (in meters). Output the results to the console.


// The conversion factor for inches to centimeter
let inch_to_CM = 2.54;

// The conversion factor for pounds to kilo
let pound_to_KG = 2.2046;

// Ask user for height in inches
let heightInInches = prompt("Please enter the height in inches");
console.log(heightInInches, " inch");

// Ask user for weight in pounds
let weightInPounds = prompt("Please enter the weight in pounds");
console.log(weightInPounds, " pounds");

// Convert height in inches to height in centimeters
let heightInCm = heightInInches * inch_to_CM;

let height = heightInInches + " inch is equal to " + heightInCm + " cm";
console.log(height);

// Convert weight in pounds to weight in kilograms
let weightInKg = weightInPounds / pound_to_KG;

let weight = pound_to_KG + " pounds is equal to " + weightInKg + "kilo";
console.log(weight);

// Convert height to meters (for BMI calculation)
let heightInMeters = heightInCm / 100;

// Calculate BMI: weight (kg) / height^2 (meters)
let bmi = weightInKg / (heightInMeters ** 2);
console.log("BMI: " + bmi.toFixed(2));
