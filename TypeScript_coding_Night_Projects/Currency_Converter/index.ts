#! /usr/bin/env node

import inquire from "inquirer";
import chalk from "chalk";

console.log(chalk.blue.bold("\n \t welcome to 'Anum' - currency converter\n"));

// Define the list of currenies and thier exchange rates
 let exchange_rate: any = {
    "USD": 1,
    "EUR": 0.9,
    "JYP": 113,
    "CAD": 1.3,
    "AUD": 1.65,
    "PKR": 277.70,                   //280,
 }

 // Promt the user to select currencies to convert from and to 
 let user_answer = await inquire.prompt([
    {
        name: "from_currency",
        type: "list",
        message:" Enter from currency:",
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        name: "to_currency",
        type: "list",
        message: "Enter to currency:",
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        name: "amount",
        type: "input",
        message: "Enter your amount:"
    }
 ]);

 // perform currency conversion by using formula
    let from_amount = exchange_rate[user_answer.from_currency];
    let to_amount = exchange_rate[user_answer.to_currency];
    let amount =user_answer.amount

    // formula of conversion
    let base_amount =  amount / from_amount
    let converted_amount = base_amount * to_amount

    console.log(`converted Amount = ${chalk.green(converted_amount.toFixed(2))}`);