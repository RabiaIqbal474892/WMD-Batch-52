/*
Q # 28
Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
• If the person is less than 2 years old, print a message that the person is a baby.

• If the person is at least 2 years old but less than 4, print a message that the person is a toddler.

• If the person is at least 4 years old but less than 13, print a message that the person is a kid.

• If the person is at least 13 years old but less than 20, print a message that the person is a teenager.

• If the person is at least 20 years old but less than 65, print a message that the person is an adult.

• If the person is age 65 or older, print a message that the person is an elder.
*/

let age: number = 25;

// If the person is less than 2 years old, print a message that the person is a baby.
if (age < 2) {
  console.log(`Age is ${age}, The person is a baby.`);
} else if (age < 4) {
  console.log(`Age is ${age}, The person is a toddler.`);
} else if (age < 13) {
  console.log(`Age is ${age}, The person is a kid.`);
} else if (age < 20) {
  console.log(`Age is ${age}, The person is a teenager.`);
} else if (age < 65) {
  console.log(`Age is ${age}, The person is an adult.`);
} else {
  console.log(`Age is ${age}, The person is an elder.`);
}

// To test with different age
console.log(`2nd test with different age`);
age = 12;

if (age < 2) {
  console.log(`Age is ${age}, The person is a baby.`);
} else if (age < 4) {
  console.log(`Age is ${age}, The person is a toddler.`);
} else if (age < 13) {
  console.log(`Age is ${age}, The person is a kid.`);
} else if (age < 20) {
  console.log(`Age is ${age}, The person is a teenager.`);
} else if (age < 65) {
  console.log(`Age is ${age}, The person is an adult.`);
} else {
  console.log(`Age is ${age}, The person is an elder.`);
}

// Another Method

let personAge: number = 25; // You can set the age to any value

// If the person is less than 2 years old, print a message that the person is a baby.
if (personAge < 2 && personAge >= 0) {
  console.log(`Age is ${personAge}, The person is a baby.`);
}
// If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
else if (personAge >= 2 && personAge < 4) {
  console.log(`Age is ${personAge}, The person is a toddler.`);
}
// If the person is at least 4 years old but less than 13, print a message that the person is a kid.
else if (personAge >= 4 && personAge < 13) {
  console.log(`Age is ${personAge}, The person is a kid.`);
}
// If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
else if (personAge >= 13 && personAge < 20) {
  console.log(`Age is ${personAge}, The person is a teenager.`);
}
// If the person is at least 20 years old but less than 65, print a message that the person is an adult.
else if (personAge >= 20 && personAge < 65) {
  console.log(`Age is ${personAge}, The person is an adult.`);
}
// If the person is age 65 or older, print a message that the person is an elder.
else if (personAge >= 65 && personAge < 105) {
  console.log(`Age is ${personAge}, The person is an elder.`);
}
// Age less than 0
else {
  console.log(`Age is ${personAge}, which is not acceptable.`);
}
