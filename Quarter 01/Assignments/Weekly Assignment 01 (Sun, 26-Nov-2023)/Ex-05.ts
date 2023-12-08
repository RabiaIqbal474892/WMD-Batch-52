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

// Method 2

// VotingEligibility
let ageVotingEligibility = 10;

if (ageVotingEligibility >= 18) {
  console.log("You are eligible to vote");
} else {
  console.error("Age restriction for voting eligibity");
}

// Method 3: with arrow function

const votingEligibility = (age: number) => {
  if (age >= 21) {
    return console.log(`Age is ${age}, which is eligible to vote`);
  } else {
    return console.log(`Age is ${age}, which is not eligible to vote`);
  }
};

votingEligibility(20);
votingEligibility(23);
votingEligibility(18);
