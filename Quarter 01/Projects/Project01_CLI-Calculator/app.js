/*
Develop a simple command line calculator using TypeScipt, Node.js and Inquirer.

Create a GitHub repository for the project and submit its URL and NPX command in the project submission form. Please note that you will create a NPX command for your project and publish it on npm. After the NPX command is working you will announce it on Panaverse groups on Facebook, Discord, and Twitter.


You can develop CLI Games using Inquirer, Chalk, etc. All your class projects will be CLI based and should be deployed as an NPX command

CLI calculator with inquirer prompt and chalk alert in Node JS

How to use of Inquirer, Chalk, If-Else-If in typescript node js project
*/
import * as inquirer from "inquirer";
import chalk from "chalk";
// Calculator operators
var Operator;
(function (Operator) {
    Operator["ADD"] = "Addition";
    Operator["SUBTRACT"] = "Subtraction";
    Operator["MULTIPLY"] = "Multiplication";
    Operator["DIVIDE"] = "Division";
})(Operator || (Operator = {}));
const prompt = inquirer.createPromptModule();
function validateNumber(input) {
    if (isNaN(parseFloat(input))) {
        return "Please enter a number";
    }
    return true;
}
async function main() {
    console.log(chalk.overline.underline.blue.bold.italic(`This is a simple CLI command Based Calculator:`));
    const input = await prompt([
        {
            type: "input",
            name: "num1",
            message: "Please enter the first number:",
            validate: validateNumber,
        },
        {
            type: "list", // rawlist can also be used
            name: "operator",
            message: "Select an operation:",
            choices: Object.values(Operator),
        },
        {
            type: "input",
            name: "num2",
            message: "Please enter the second number:",
            validate: validateNumber,
        },
    ]);
    const num1 = parseFloat(input.num1);
    const num2 = parseFloat(input.num2);
    const selectedOperator = input.operator;
    let result;
    if (selectedOperator === Operator.ADD) {
        result = num1 + num2;
        console.log(chalk.green.bgRedBright(`Result is : ${result}`));
    }
    else if (selectedOperator === Operator.DIVIDE) {
        result = num1 / num2;
        console.log(chalk.yellow.bgBlack(`Result is : ${result}`));
    }
    else if (selectedOperator === Operator.MULTIPLY) {
        result = num1 * num2;
        console.log(chalk.blue.bgYellowBright(`Result is : ${result}`));
    }
    else if (selectedOperator === Operator.SUBTRACT) {
        result = num1 - num2;
        console.log(chalk.blue.bgBlack(`Result is : ${result}`));
    }
}
main();
export default main;
