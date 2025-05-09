#! /usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var chalk_1 = require("chalk");
// Printing a wellcome message 
console.log(chalk_1.default.blue("\n\twellcome To \ `CodeWith8noorA\` - CLI simple Calculator\n"));
// Asking question from users through inquirer
var answers = await inquirer_1.default.prompt([
    { message: chalk_1.default.magenta("Enter First Number"), type: "number", name: "firstNumber" },
    { message: chalk_1.default.magenta("Enter Second Number"), type: "number", name: "secondNumber" },
    {
        message: chalk_1.default.green("Select one Operator to perform Operations"),
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtractions", "Multiplication", "Division"],
    },
]);
// conditional statement If-Else
if (answers.operator === "Addition") {
    console.log(answers.firstNumber + answers.secondNumber);
}
else if (answers.operator === "Subtractions") {
    console.log(answers.firstNumber - answers.secondNumber);
}
else if (answers.operator === "Multiplication") {
    console.log(answers.firstNumber * answers.secondNumber);
}
else if (answers.operator === "Division") {
    console.log(answers.firstNumber / answers.secondNumber);
}
else {
    console.log("invalid input");
}
