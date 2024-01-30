import inquirer from "inquirer";
inquirer
    .prompt([
    {
        type: "input",
        name: "num1",
        message: "Enter the first number",
    },
    {
        type: "input",
        name: "num2",
        message: "Enter the second number",
    },
    {
        type: "list",
        name: "operation",
        choices: ["+", "-", "*", "/"],
        message: "Enter your operation",
    },
])
    .then((answers) => {
    console.log(answers);
    // if (operation == "+") {
    //   sum(num1, num2);
    // } else if (operation == "-") {
    //   subtract(num1, num2);
    // } else if (operation == "*") {
    //   multiply(num1, num2);
    // } else if (operation == "/") {
    //   division(num1, num2);
    // } else {
    //   console.log("Invalid Operation");
    // }
})
    .catch((error) => {
    if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
    }
    else {
        // Something else went wrong
    }
});
function main() {
    let num1 = 5;
    let num2 = 10;
    let operation = "+";
}
function sum(num1, num2) {
    const result = num1 + num2;
    console.log("Sum", result);
}
function subtract(num1, num2) {
    const result = num1 - num2;
    console.log("Subtraction", result);
}
function multiply(num1, num2) {
    const result = num1 * num2;
    console.log("Multiply", result);
}
function division(num1, num2) {
    const result = num1 / num2;
    console.log("Division", result);
}
main();
