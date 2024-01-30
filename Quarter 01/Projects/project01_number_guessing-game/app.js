/*
This guess the number game is a short TypeScript/Node.js project that allows the user to guess the number generated by the computer. There are also several ways to alter the game, like adding more rounds or displaying the score. It’s quite simple and uses the random function to generate a number.
*/
import inquirer from "inquirer";
import chalk from "chalk";
// Step 1: Generate a random number
const randomNumber = Math.floor(Math.random() * 100) + 1;
let remainingChances = 6;
// console.log(randomNumber)
// Step 2
function validateNumber(input) {
    const number = parseFloat(input);
    if (isNaN(number)) {
        return "Please enter a valid number.";
    }
    if (number < 0 || number > 100) {
        return "Please guess a number between 1 and 100.";
    }
    return true;
}
async function askForGuess() {
    inquirer
        .prompt([
        {
            type: "input",
            name: "guess",
            message: "Please guess a number between 1 and 100:",
            validate: validateNumber,
        },
    ])
        // Step 3
        .then((answers) => {
        const guessedNumber = parseInt(answers.guess);
        if (guessedNumber === randomNumber) {
            console.log(chalk.bgBlue.yellow(`Congratulations! You guessed the number ${randomNumber} correctly`));
            process.exit(0);
        }
        else if (guessedNumber < randomNumber) {
            remainingChances--;
            console.log(chalk.bgRed.white(`Too Low, kindly guess again. Your remaining chances are ${remainingChances}.`));
            if (remainingChances === 0) {
                console.log(chalk.green.bgRed(`We are really sorry you had missed all your chances. Correct number is ${randomNumber}`));
            }
            else {
                askForGuess();
            }
        }
    });
}
askForGuess();
