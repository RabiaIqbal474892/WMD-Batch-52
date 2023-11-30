// ########################################### Nested ###########################################

// Ticketing system
let country = "Pakistan";

let age = 10;

if (country === "Pakistan") {
  if (age >= 18) {
    console.log("Here is your ticket");
  } else {
    console.error("Age restriction");
  }
} else {
  console.log("Invalid country");
}
