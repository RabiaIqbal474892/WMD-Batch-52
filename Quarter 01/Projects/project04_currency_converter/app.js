// Currency Convertor App Inquirer Library TypeScript, Project-04
// https://www.youtube.com/watch?v=mE1QMCmmmxw
import inquirer from "inquirer";
let loop = true;
while (loop) {
    const userInput = await inquirer.prompt([
        {
            type: "list",
            name: "currencyInput",
            choices: ["Pakistani Rupee", "US Dollar", "Saudi Riyal"],
            message: "Select your input Currency",
        },
        {
            type: "number",
            name: "amountInput",
            message: "Enter the amount you want to convert",
        },
        {
            type: "list",
            name: "currencyOutput",
            choices: ["Pakistani Rupee", "US Dollar", "Saudi Riyal"],
            message: "Select your output Currency",
        },
    ]);
    const input = userInput.currencyInput;
    const output = userInput.currencyOutput;
    const amount = userInput.amountInput;
    if (input === "Pakistani Rupee") {
        if (output === "US Dollar") {
            console.log(`The ${amount} Pakistan Rupee is equal to ${amount / 281} US Dollar`);
        }
        else if (output === "Saudi Riyal") {
            console.log(`The ${amount} Pakistan Rupee is equal to ${amount / 75} Saudi Riyal`);
        }
    }
    else if (input === "US Dollar") {
        if (output === "Pakistani Rupee") {
            console.log(`The ${amount} US Dollar is equal to ${amount * 281} Pakistan Rupee`);
        }
        else if (output === "Saudi Riyal") {
            console.log(`The ${amount} US Dollar is equal to ${amount * 3.75} Saudi Riyal`);
        }
    }
    else if (input === "Saudi Riyal") {
        if (output === "Pakistani Rupee") {
            console.log(`The ${amount} Saudi Riyal is equal to ${amount * 75} Pakistan Rupee`);
        }
        else if (output === "US Dollar") {
            console.log(`The ${amount} Saudi Riyal is equal to ${amount / 3.75} US Dollar`);
        }
    }
    const calculateAgain = await inquirer.prompt({
        type: "confirm",
        name: "calculateMore",
        message: "Do you want more conversions?",
        default: false,
    });
    if (!calculateAgain.calculateMore) {
        loop = false;
    }
}
