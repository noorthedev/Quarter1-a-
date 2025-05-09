#! /usr/bin/env node

import { Console } from "console";
import inquirer from "inquirer";

import chalk from "chalk";

// Printing a wellcome message 
console.log(chalk.blue("\n\twellcome To \ `CodeWith8noorA\` - CLI simple Calculator\n"));

// Asking question from users through inquirer

let answers = await inquirer.prompt([
    {message: chalk.magenta("Enter First Number"), type: "number", name: "firstNumber"},
    {message: chalk.magenta("Enter Second Number"), type: "number", name: "secondNumber"},
    {
        message: chalk.green("Select one Operator to perform Operations"),
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtractions", "Multiplication", "Division"],
    },
]);

// conditional statement If-Else

if(answers.operator === "Addition"){
    console.log(answers.firstNumber + answers.secondNumber);
}
else if (answers.operator === "Subtractions"){
    console.log(answers.firstNumber - answers.secondNumber);
}
else if (answers.operator === "Multiplication"){
    console.log(answers.firstNumber * answers.secondNumber);
    }
    else if (answers.operator === "Division"){
        console.log(answers.firstNumber / answers.secondNumber);
    }
    else{
        console.log("invalid input");
    }