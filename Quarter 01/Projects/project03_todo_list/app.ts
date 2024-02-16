// to do list app
// array todos
// operation
// function

import inquirer from "inquirer";

let todos: string[] = ["Rabia"];

async function createtodo(todos: string[]) {
  do {
    let welcome = console.log("Welcome to the todolist app!");

    let operation = await inquirer.prompt({
      type: "list",
      name: "operator",
      message: "What you want to do?",
      choices: ["Add", "View", "Update", "Delete"],
    });

    if (operation.operator === "Add") {
      let add = await inquirer.prompt({
        type: "input",
        name: "additems",
        message: "Please add items",
      });
      todos.push(add.additems);
      console.log(todos);
    }
    if (operation.operator === "View") {
      console.log(todos);
    }
    if (operation.operator === "Update") {
      let update = await inquirer.prompt({
        type: "list",
        name: "updateitems",
        message: "Select item to update",
        choices: todos,
      });
      let update2 = await inquirer.prompt({
        type: "input",
        name: "updateitems2",
        message: "Update item",
      });
      let newtodos = todos.filter((val) => val != update.updateitems);
      todos = [...newtodos, update2.updateitems2];
    }

    if (operation.operator === "Delete") {
      let remove = await inquirer.prompt({
        type: "list",
        name: "removeitems",
        message: "Select item to delete",
        choices: todos,
      });
    }
  } while (true);
}

createtodo(todos);
