"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var functions_js_1 = require("./functions.js");
var answers = [
    {
        name: "num1",
        type: "number",
        message: "Kindly enter your first no: ",
    },
    {
        name: "num2",
        type: "number",
        message: "Kindly enter your second no: ",
    },
    {
        name: "operation",
        type: "list",
        choices: ["add", "sub", "mul", "div"],
        message: "Enter your operation: ",
    },
];
var _a = await inquirer_1.default.prompt(answers), num2 = _a.num2, num1 = _a.num1, operation = _a.operation;
if (operation === "add") {
    console.log("The sum of two numbers: ", (0, functions_js_1.sum)(num1, num2));
}
