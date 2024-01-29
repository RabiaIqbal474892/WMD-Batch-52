/*
Q # 26
Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

• If the alien’s color isn’t green, print a statement that the player just earned 10 points.

• Write one version of this program that runs the if block and another that runs the else block.
*/

// Version 1 (runs the if block)
console.log("\n1st version of code");
let alien_color: string = "green";

if (alien_color === "green") {
  console.log(
    "Congratulations! You just earned 5 points for shooting the alien."
  );
} else {
  console.log(
    "Congratulations! You just earned 10 points for shooting the alien."
  );
}

// Version 2 (runs the else block)
console.log("\n2nd version of code");
alien_color = "blue";

if (alien_color === "green") {
  console.log(
    "Congratulations! You just earned 5 points for shooting the alien."
  );
} else {
  console.log(
    "Congratulations! You just earned 10 points for shooting the alien"
  );
}

export {};

// Another Method

// Method 2: Version 1 (runs the if block)
// Version that runs the if block (alien_color is 'green')
console.log("\nMethod 1: 1st version of code");
let alien_color_if: string = "green";

if (alien_color_if === "green") {
  console.log(
    "Congratulations! You just earned 5 points for shooting the green alien."
  );
} else {
  console.log(
    "Congratulations! You just earned 10 points for shooting an alien that is not green."
  );
}

// Method 2: Version 2 (runs the else block)
// Version that runs the else block (alien_color is 'yellow' or 'red')
console.log("\nMethod 2: 2nd version of code");
let alien_color_else: string = "red";

if (alien_color_else === "green") {
  console.log(
    "Congratulations! You just earned 5 points for shooting the green alien."
  );
} else {
  console.log(
    "Congratulations! You just earned 10 points for shooting an alien that is not green."
  );
}
