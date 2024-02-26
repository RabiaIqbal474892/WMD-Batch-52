// Typescript project for beginners | typescript to Javascript | ( WORD COUNTER CLI PROJECT )
// https://www.youtube.com/watch?v=JyOc7bnosmk&t=279s

import inquirer from "inquirer";

const answers: { Sentence: string } = await inquirer.prompt([
  {
    name: "Sentence",
    type: "input",
    message: "Enter your sentence to count the word: ",
  },
]);

const words = answers.Sentence.trim().split(" ");

console.log(words);

console.log(`Your sentence word count is ${words.length}`);
