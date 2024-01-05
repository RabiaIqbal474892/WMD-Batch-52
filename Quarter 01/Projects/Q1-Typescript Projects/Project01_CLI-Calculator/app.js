"use strict";
/*
Develop a simple command line calculator using TypeScipt, Node.js and Inquirer.

Create a GitHub repository for the project and submit its URL and NPX command in the project submission form. Please note that you will create a NPX command for your project and publish it on npm. After the NPX command is working you will announce it on Panaverse groups on Facebook, Discord, and Twitter.


You can develop CLI Games using Inquirer, Chalk, etc. All your class projects will be CLI based and should be deployed as an NPX command

CLI calculator with inquirer prompt and chalk alert in Node JS

How to use of Inquirer, Chalk, If-Else-If in typescript node js project
*/
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer = require("inquirer");
var chalk_1 = require("chalk");
// Calculator operators
var Operator;
(function (Operator) {
    Operator["ADD"] = "Addition";
    Operator["SUBTRACT"] = "Subtraction";
    Operator["MULTIPLY"] = "Multiplication";
    Operator["DIVIDE"] = "Division";
})(Operator || (Operator = {}));
var prompt = inquirer.createPromptModule();
function validateNumber(input) {
    if (isNaN(parseFloat(input))) {
        return "Please enter a number";
    }
    return true;
}
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var input, num1, num2, selectedOperator, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log(chalk_1.default.overline.underline.blue.bold.italic("This is a simple CLI command Based Calculator:"));
                    return [4 /*yield*/, prompt([
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
                        ])];
                case 1:
                    input = _a.sent();
                    num1 = parseFloat(input.num1);
                    num2 = parseFloat(input.num2);
                    selectedOperator = input.operator;
                    if (selectedOperator === Operator.ADD) {
                        result = num1 + num2;
                        console.log(chalk_1.default.green.bgRedBright("Result is : ".concat(result)));
                    }
                    else if (selectedOperator === Operator.DIVIDE) {
                        result = num1 / num2;
                        console.log(chalk_1.default.yellow.bgBlack("Result is : ".concat(result)));
                    }
                    else if (selectedOperator === Operator.MULTIPLY) {
                        result = num1 * num2;
                        console.log(chalk_1.default.blue.bgYellowBright("Result is : ".concat(result)));
                    }
                    else if (selectedOperator === Operator.SUBTRACT) {
                        result = num1 - num2;
                        console.log(chalk_1.default.blue.bgBlack("Result is : ".concat(result)));
                    }
                    return [2 /*return*/];
            }
        });
    });
}
main();
exports.default = main;
