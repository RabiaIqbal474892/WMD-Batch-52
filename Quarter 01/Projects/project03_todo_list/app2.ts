// Project 03 Todo List CLI in TypeScript
// https://www.youtube.com/watch?v=9TvKrB9jrlA&list=PLS2BJK3gML7tTcwRD9b-hUx_922Wak5Oz&index=5

import inquirer from "inquirer";

let todos: string[] = [];
let loop = true;

while (loop) {
  const answers: {
    TODO: string;
    addmore: boolean;
  } = await inquirer.prompt([
    {
      type: "input",
      name: "TODO",
      message: "what do you want to add in your todo?",
    },
    {
      type: "confirm",
      name: "addmore",
      message: "Do you want to add more todo?",
      default: false,
    },
  ]);

  const { TODO, addmore } = answers;
  console.log(answers);

  loop = addmore;

  if (TODO) {
    todos.push(TODO);
  } else {
    console.log("Kindly add valid input");
  }
}

console.log(todos);

if (todos.length > 0) {
  console.log("Your Todo List:");
  todos.forEach((todo) => {
    console.log(todo);
  });
} else {
  console.log("No todos found");
}
