/*
Exercise 5: Write a program that determines if a person is eligible to vote based on their age.
*/

function checkVotingEligibility(age: number): string {
  if (age >= 18) {
    return "Eligible to vote";
  } else {
    return "Not eligible to vote";
  }
}

// Example usage:
const personAge: number = 22;
const eligibilityStatus: string = checkVotingEligibility(personAge);
console.log(`At the age of ${personAge}, the person is ${eligibilityStatus}.`);

// Another Method

// Ticketing system
let age = 10;

if (age >= 18) {
  console.log("You are eligible to vote");
} else {
  console.error("Age restriction for voting eligibity");
}
