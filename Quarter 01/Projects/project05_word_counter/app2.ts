// TypeScript Word Count Project
// https://www.youtube.com/watch?v=MJCmxo4odu8

import inquirer from "inquirer";

async function startLoop() {}
do {
  await getSentence();
  var again = await inquirer.prompt([
    {
      type: "checkbox",
      name: "loop",
      choices: ["Yes", "No"],
      message: "Do you want to continue: ",
    },
  ]);
} while (again.loop == "Yes");

startLoop();
async function getSentence() {
  const answer: { sentence: string } = await inquirer.prompt([
    {
      type: "input",
      name: "Sentence",
      message: "Please write your sentence to count words: ",
    },
  ]);
  console.log(
    `Word count in your sentence is ${wordCount(answer.sentence.trim())}`
  );
}

function wordCount(sent: string): number {
  if (sent.length > 0) {
    const words = sent.split(" ");
    console.log(words);
    return words.length;
  } else {
    return 0;
  }
}
