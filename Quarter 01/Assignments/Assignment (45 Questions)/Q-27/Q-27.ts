/*
Q # 27
Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.

• If the alien is yellow, print a message that the player earned 10 points.

• If the alien is red, print a message that the player earned 15 points.

• Write three versions of this program, making sure each message is printed for the appropriate color alien.
*/

// Version 1 - where align color is green
console.log(`1st version where align color is green:`);

let alien_color: string = "green";

if (alien_color === "green") {
  console.log("Congratulations! You just earned 5 points.");
} else if (alien_color === "yellow") {
  console.log("Congratulations! You just earned 10 points.");
} else if (alien_color === "red") {
  console.log("Congratulations! You just earned 15 points.");
} else {
  console.log("Unknown alien color.");
}

// Version 2 - where align color is yellow
console.log(`2nd version where align color is yellow:`);
alien_color = "yellow";
if (alien_color === "green") {
  console.log("Congratulations! You just earned 5 points.");
} else if (alien_color === "yellow") {
  console.log("Congratulations! You just earned 10 points.");
} else if (alien_color === "red") {
  console.log("Congratulations! You just earned 15 points.");
} else {
  console.log("Unknown alien color.");
}

// Version 3 - where align color is red
console.log(`3rd version where align color is red:`);
alien_color = "red";
if (alien_color === "green") {
  console.log("Congratulations! You just earned 5 points.");
} else if (alien_color === "yellow") {
  console.log("Congratulations! You just earned 10 points.");
} else if (alien_color === "red") {
  console.log("Congratulations! You just earned 15 points.");
} else {
  console.log("Unknown alien color.");
}

// Another Method

// Version for green alien (earns 5 points)
let alien_color_green: string = "green";

if (alien_color_green === "green") {
  console.log(
    "Congratulations! You just earned 5 points for shooting the green alien."
  );
} else if (alien_color_green === "yellow") {
  console.log(
    "Congratulations! You just earned 10 points for shooting the yellow alien."
  );
} else if (alien_color_green === "red") {
  console.log(
    "Congratulations! You just earned 15 points for shooting the red alien."
  );
}

// Version for yellow alien (earns 10 points)
let alien_color_yellow: string = "yellow";

if (alien_color_yellow === "green") {
  console.log(
    "Congratulations! You just earned 5 points for shooting the green alien."
  );
} else if (alien_color_yellow === "yellow") {
  console.log(
    "Congratulations! You just earned 10 points for shooting the yellow alien."
  );
} else if (alien_color_yellow === "red") {
  console.log(
    "Congratulations! You just earned 15 points for shooting the red alien."
  );
}

// Version for red alien (earns 15 points)
let alien_color_red: string = "red";

if (alien_color_red === "green") {
  console.log(
    "Congratulations! You just earned 5 points for shooting the green alien."
  );
} else if (alien_color_red === "yellow") {
  console.log(
    "Congratulations! You just earned 10 points for shooting the yellow alien."
  );
} else if (alien_color_red === "red") {
  console.log(
    "Congratulations! You just earned 15 points for shooting the red alien."
  );
}
