#! /usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var chalk_1 = require("chalk");
// Initialize user balance and pin code
var myBalance = 8000;
var myPin = 12345;
// print welcome message
console.log(chalk_1.default.blue("\n \twelcome to code with Anum - ATM Machine\n \t"));
var pinAnswer = await inquirer_1.default.prompt([
    {
        name: "pin",
        type: "number",
        message: chalk_1.default.magenta("Enter your pin code:")
    }
]);
if (pinAnswer.pin === myPin) {
    console.log(chalk_1.default.green("\npin is correct, loing successfully!\n"));
    //console.log(` Current Account balance is ${myBalance} `)
    var operationAns = await inquirer_1.default.prompt([
        {
            name: "operation",
            type: "list",
            message: chalk_1.default.grey("select your operation:"),
            choices: ["Withdraw Amount", "Check Balance"]
        }
    ]);
    if (operationAns.operation === "Withdraw Amount") {
        var withdrawAns = await inquirer_1.default.prompt([
            {
                name: "withdrawMethod",
                type: "list",
                message: chalk_1.default.gray("select a withdrawal method:"),
                choices: ["fast_Cash", "enter_Amount"]
            }
        ]);
        if (withdrawAns.withdrawMethod === "fast_Cash") {
            var fast_CashAns = await inquirer_1.default.prompt([
                {
                    name: "fast_Cash",
                    type: "list",
                    message: "Select amount:",
                    choices: [1000, 2000, 3000, 4000, 5000, 10000, 70000]
                }
            ]);
            if (fast_CashAns.fast_Cash > myBalance) {
                console.log(chalk_1.default.red("Insufficient Balance"));
            }
            else {
                myBalance -= fast_CashAns.fast_Cash;
                console.log("".concat(fast_CashAns.fast_Cash, " withdraw Successfully"));
                console.log("Your remaining balance is: ".concat(myBalance));
            }
        }
        else if (withdrawAns.withdrawMethod === "enter_Amount") {
            var enter_AmountAns = await inquirer_1.default.prompt([
                {
                    name: "enter_Amount",
                    type: "number",
                    message: "Enter the amount to withdraw :"
                }
            ]);
            if (enter_AmountAns.enter_Amount > myBalance) {
                console.log(chalk_1.default.red("Insufficient Balance"));
            }
            else {
                myBalance -= enter_AmountAns.enter_Amount;
                console.log("".concat(enter_AmountAns.enter_Amount, " withdraw successfully"));
                console.log("Your remaining balance is: ".concat(myBalance));
            }
        }
    }
    else if (operationAns.operation === "Check Balance") {
        console.log(chalk_1.default.yellow("Your Account Balance is: ".concat(myBalance)));
    }
}
else {
    console.log(chalk_1.default.red("Pin is incorrect, try again!"));
}
