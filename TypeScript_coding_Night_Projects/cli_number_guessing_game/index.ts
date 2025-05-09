#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.blue("\n\tWellcome to codewith Anum - Cli Number guessing Game\n"));

const randomNumber = Math.floor(Math.random() * 5 + 1  );

const result = await inquirer.prompt([
    {
        name: "userGuessedNummber",
        type: "number",
        message: chalk.magenta("Enter your guess number(Number limit from 1 to 5):"),

    },
]);

if (result.userGuessedNummber === randomNumber){
    console.log(chalk.green("\n \t Congratulation You guess a correct number.\n"));
}
else{
    console.log(chalk.red("\n \t Sorry, you guess a wrong number\n"));
}