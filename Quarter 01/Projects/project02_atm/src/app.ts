#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import fs from "fs"; // fs = file system

// Data Structure to store customer information

interface Customer {
  name: string;
  debitCardNumber: string;
  pin: number;
  balance: number;
}

// to initialize an array to store customer data

let customers: Customer[] = [];

// Global variable to store the current customer (if authenticated)
// for each customer data in the array

let currentCustomer: Customer | undefined = undefined; // global variable

// function to create a random debit card number

const generateRandomDebitCardNumber = () => {
  const cardNumber =
    `4` +
    Array.from({ length: 15 }, () => Math.floor(Math.random() * 10)).join("");
  return cardNumber;
};

// it generates random card number starting with number 4
// console.log(generateRandomDebitCardNumber());

// function to open a new account

// async function because we need an input from inquirer and
// if some person want to open an account, he will give us some information

const openAccount = async () => {
  console.log(chalk.green(`Welcome to the ATM`));

  // as we want to ask more than 1 questions, so we will make array of objects
  const answers = await inquirer.prompt([
    {
      type: "input", // objects
      name: "name",
      message: "Enter your name: ",
      validate: (input) => {
        // check if the name is already exist in customers

        const existingCustomer = customers.find((c) => c.name === input);
        if (existingCustomer) {
          return "The customer with this name already exits, please choose another name.";
        }

        return true; // if the person already exists in customers, then return true and create a new user name
      },
    },
    // new object, object with curly braces
    {
      type: "input",
      name: "initialDeposit",
      message: "Please enter your initial deposit amount: ",
    },
    // new object for PIN code
    {
      type: "password", // use the password type to hide PIN code input
      name: "pin",
      message: "Create your 4 digit pin: ",
      validate: (input) => {
        if (/^\d{4}$/.test(input)) {
          return true;
        }
        return "Pin must be a 4-digit number.";
      },
    },
  ]);

  const newCustomer: Customer = {
    name: answers.name,
    debitCardNumber: generateRandomDebitCardNumber(),
    pin: parseInt(answers.pin, 10),
    balance: parseFloat(answers.initialDeposit),
  };

  customers.push(newCustomer);

  // we can save customer information in the json file as well
  // for that in the global state, we will create function
  // where we will save customer data in a json file

  // we will create function to save customer data in a json object

  // saveCustomerData
  saveCustomerData(customers);
  console.log(`Account created successfully for ${newCustomer.name}`);

  console.log(`Your Debit Card Number is: ${newCustomer.debitCardNumber}`);
  console.log(`Your initial balance is: ${newCustomer.balance} USD`);

  currentCustomer = newCustomer;

  // ATM Menu will also show in global scope so we can use it anywhere in the function

  atmMenu();
};

// Function to save customer data to a JSON object/file

const saveCustomerData = (data: Customer[]): void => {
  const jsonData = JSON.stringify(data, null, 2);
  fs.writeFileSync("customerData.json", jsonData, "utf8"); // fs = file system
};

// customers = retrieveCustomerData();

// Function to retrieve customer data from a JSON file

const retrieveCustomerData = (): Customer[] => {
  try {
    const jsonData = fs.readFileSync("customerData.json", "utf-8");
    return JSON.parse(jsonData);
  } catch (error) {
    // If the file doesn't exist or is empty, return an empty array
    return [];
  }
};

// Function to authenticate the user
const authenticateUser = async () => {
  console.log(chalk.green("Welcome to the ATM!"));

  const answers = await inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Enter your name: ",
    },
  ]);

  const existingCustomer = customers.find((c) => c.name === answers.name); // code check from here

  if (existingCustomer) {
    const pinAnswer = await inquirer.prompt([
      {
        type: "password", // Use 'password' type to hide PIN code input
        name: "pin",
        message: "Enter your 4-digit PIN:",
        validate: (input) => {
          if (/^\d{4}$/.test(input)) {
            return true;
          }
          return "Pin must be a 4-digit number.";
        },
      },
    ]);

    if (existingCustomer.pin === parseInt(pinAnswer.pin, 10)) {
      currentCustomer = existingCustomer;
      atmMenu();
    } else {
      console.log(chalk.red("Authentication failed. The PIN is incorrect."));
      console.log("Please try again.");
      main();
    }
  } else {
    console.log(
      chalk.red("Authentication failed. You are not an existing customer.")
    );
    console.log("Please open an account or try again.");
    main();
  }
};

// ATM Menu or functionalities

const atmMenu = async () => {
  if (currentCustomer) {
    console.log(`Welcome, ${currentCustomer.name}`);
    console.log(`Debit Card Number: ${currentCustomer.debitCardNumber}`);
    console.log(`Balance: ${currentCustomer.balance.toFixed(2)}`);

    // we can ask for choices from the customer
    // there can be multiple objects
    const answer = await inquirer.prompt([
      {
        type: "list", // object
        name: "choice",
        message: "Please select the option ",
        choices: ["Withdraw", "Deposit Money", "Check Balance", "Exit"],
      },
    ]);

    switch (answer.choice) {
      case "Withdraw Money":
        withdrawMoney();
        break;
      case "Deposit Money":
        depositMoney();
        break;
      case "Check Balance":
        console.log(
          `Your account balance is : ${currentCustomer.balance.toFixed(2)}`
        );
        atmMenu();
      case "Exit":
        console.log("Exiting ATM. Goodbye!");
    }
  }
};

// Implement withdraw and deposit functions here
const withdrawMoney = async () => {
  const answer = await inquirer.prompt([
    {
      type: "password", // Use 'password' type to hide PIN input
      name: "pin",
      message: "Enter your 4-digit PIN for withdrawal",
      validate: (input) => {
        if (
          /^\d{4}$/.test(input) &&
          parseInt(input, 10) === currentCustomer!.pin
        ) {
          return true;
        }
        return "Authentication failed. The PIN is incorrect.";
      },
    },
    {
      type: "input",
      name: "amount",
      message: "Enter the withdrawal amount:",
      validate: (input) => {
        const amount = parseFloat(input);
        if (isNaN(amount) || amount <= 0 || amount > currentCustomer!.balance) {
          return "Invalid amount. Please enter a valid amount.";
        }
        return true;
      },
    },
  ]);

  const withdrawalAmount = parseFloat(answer.amount);
  currentCustomer!.balance -= withdrawalAmount;
  saveCustomerData(customers);

  console.log(
    `Withdrawal successful. New balance: ${currentCustomer!.balance.toFixed(2)}`
  );
  atmMenu();
};

const depositMoney = async () => {
  const answer = await inquirer.prompt([
    {
      type: "input",
      name: "amount",
      message: "Enter the deposit amount:",
      validate: (input) => {
        const amount = parseFloat(input);
        if (isNaN(amount) || amount <= 0) {
          return "Invalid amount. Please enter a valid amount.";
        }
        return true;
      },
    },
  ]);

  const depositAmount = parseFloat(answer.amount);
  currentCustomer!.balance += depositAmount;
  saveCustomerData(customers);

  console.log(
    `Deposit successful. New balance: ${currentCustomer!.balance.toFixed(2)}`
  );
  atmMenu();
};

// Entry point Main function
const main = async () => {
  customers = retrieveCustomerData(); // Load customer data from the JSON file

  const answers = await inquirer.prompt([
    {
      type: "list",
      name: "action",
      message: "Welcome to the ATM ! What would you like to do",
      choices: ["Open an Account", "Authenticate as Existing Customer", "Exit"],
    },
  ]);

  switch (answers.action) {
    case "Open an Account":
      openAccount();
      break;
    case "Authenticate as Existing Customer":
      authenticateUser();
      break;
    case "Exit":
      console.log("Exiting ATM. Goodbye!");
      break;
  }
};

export { main };
main();

// openAccount();
