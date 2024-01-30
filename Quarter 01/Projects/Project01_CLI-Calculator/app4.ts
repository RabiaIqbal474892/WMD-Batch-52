//############################################################################

// Help Desk Session 08 - (Calculator)

//   (https://www.youtube.com/watch?v=W5b9OUM9Izg)

//############################################################################

// type, name, message, validate
// https://www.npmjs.com/package/inquirer

// https://github.com/sajid-khan-afridi/configure

// env - environment
// #! /usr/bin/env node

// https://www.npmjs.com/package/node-banner

// https://www.npmjs.com/package/gradient-string

import inquirer from "inquirer";
import { sum, subtract, product, division } from "./functions.js";
import showBanner from "node-banner";
import gradient from "gradient-string";

let answers = [
  {
    name: "num1",
    type: "number",
    message: gradient.rainbow("Kindly enter your first no: "),
    validate: (input: number) => {
      if (isNaN(input)) {
        return "Please enter number: ";
      }
      return true;
    },
  },
  {
    name: "num2",
    type: "number",
    message: gradient.rainbow("Kindly enter your second no: "),
    validate: (input: number) => {
      if (isNaN(input)) {
        return "Please enter number: ";
      }
      return true;
    },
  },
  {
    name: "operation",
    type: "list",
    choices: ["add", "sub", "mul", "div"],
    message: gradient.rainbow("Enter your operation: "),
  },
];

let answer = [
  {
    name: "again",
    type: "confirm",
    message: "Do you want to calculate again",
  },
];

(async () => {
  await showBanner(
    "Calculator",
    "This calculator can perform addition, subtraction, multiplication and division",
    "red",
    "blue"
  );
})();

async function calculator() {
  let condition = true;
  while (condition) {
    let { num2, num1, operation } = await inquirer.prompt(answers);

    if (operation === "add") {
      console.log("The sum of two numbers: ", sum(num1, num2));
    } else if (operation === "sub") {
      console.log("The difference of two numbers: ", subtract(num1, num2));
    } else if (operation === "mul") {
      console.log("The product of two numbers: ", product(num1, num2));
    } else if (operation === "div") {
      console.log("The division of two numbers: ", division(num1, num2));
    }
    let { again } = await inquirer.prompt(answer);
    condition = again;
  }
}

setTimeout(() => {
  calculator();
}, 1000); // 1000 = 1000ms = 1s
