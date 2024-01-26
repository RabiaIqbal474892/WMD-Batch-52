//############################################################################

// Help Desk Session 06 - (step03a_modules, step03b_native_ECMAScript_modules, step03c_import_inquirer_ECMAScript_module, step03d_chalk, calculator)

//   (https://www.youtube.com/watch?v=Z_KEcgsKYE8)

//############################################################################

// step03a_modules

// tsconfig.json
// module: commonjs

import { a as e, b as f } from "./Help Desk Session 06 (02) first.js";
import d from "./Help Desk Session 06 (02) first.js";

// default export can be rename
// import d from "./first";
// instead of import c from "./first"; (renaming)

const a = 29;
const b = 40;
const c = 20;

console.log(a + b + c + d + e + f);

//############################################################################

// step03b_native_ECMAScript_modules

// In the tsconfig.json set module and moduleResolution:
// "module": "NodeNext",
// "moduleResolution": "NodeNext",
// "target": "es2022",

// In the package.json add:
// "type": "module"

// asynchronous code - await

//############################################################################

// step03c_import_inquirer_ECMAScript_module

// npm i inquirer

import inquirer from "inquirer";
import chalk from "chalk";

let answers = await inquirer.prompt([
  {
    name: "age",
    type: "number",
    message: "Enter your Age:",
  },
]);

// await error
// 'await' expressions are only allowed within async functions and at the top levels of modules.
// that's why async function func()

// let age2: number = 10;

// async function func() {
//   let answers = await inquirer.prompt([
//     {
//       name: "age",
//       type: "number",
//       message: "Enter your Age:",
//     },
//   ]);
// }

console.log(chalk.bgGreen(answers.age));
console.log(chalk.bold(answers.age));

console.log(
  "Insha Allah, in " + (60 - answers.age) + " years you will be 60 years old."
);

//############################################################################

// step03d_chalk
