#! /usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var chalk_1 = require("chalk");
console.log(chalk_1.default.blue.bold("\n \t welcome to 'Anum' - currency converter\n"));
// Define the list of currenies and thier exchange rates
var exchange_rate = {
    "USD": 1,
    "EUR": 0.9,
    "JYP": 113,
    "CAD": 1.3,
    "AUD": 1.65,
    "PKR": 277.70, //280,
};
// Promt the user to select currencies to convert from and to 
var user_answer = await inquirer_1.default.prompt([
    {
        name: "from_currency",
        type: "list",
        message: " Enter from currency:",
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
var from_amount = exchange_rate[user_answer.from_currency];
var to_amount = exchange_rate[user_answer.to_currency];
var amount = user_answer.amount;
// formula of conversion
var base_amount = amount / from_amount;
var converted_amount = base_amount * to_amount;
console.log("converted Amount = ".concat(chalk_1.default.green(converted_amount.toFixed(2))));
