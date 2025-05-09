#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";


// Initialize user balance and pin code
let myBalance =8000;
let myPin = 12345;

// print welcome message
console.log(chalk.blue("\n \twelcome to code with Anum - ATM Machine\n \t"));

let pinAnswer = await inquirer.prompt([
        {
          name: "pin",
          type: "number",
          message: chalk.magenta("Enter your pin code:")
        }
]);
if (pinAnswer.pin === myPin){
    console.log(chalk.green("\npin is correct, loing successfully!\n"));
    //console.log(` Current Account balance is ${myBalance} `)

        let operationAns = await inquirer.prompt([
            {
              name: "operation",
              type: "list",
              message: chalk.grey("select your operation:"),
              choices: ["Withdraw Amount", "Check Balance"]
            }
        ]);

        if(operationAns.operation  === "Withdraw Amount"){
        let withdrawAns = await inquirer.prompt([
              
            {
                name: "withdrawMethod",
                type: "list",
                message: chalk.gray("select a withdrawal method:"),
                choices: ["fast_Cash", "enter_Amount"]
            }
    
        ]);
        if (withdrawAns.withdrawMethod === "fast_Cash"){
            let fast_CashAns = await inquirer.prompt([
                {
                 name: "fast_Cash" ,
                 type: "list",
                 message: "Select amount:",
                 choices: [1000, 2000, 3000, 4000, 5000, 10000,70000]
                }
            ]);
            if(fast_CashAns.fast_Cash > myBalance){
               console.log(chalk.red("Insufficient Balance"));
            }
            else{
                myBalance -= fast_CashAns.fast_Cash
                console.log(`${fast_CashAns.fast_Cash} withdraw Successfully`);
                console.log(`Your remaining balance is: ${myBalance}`);
            }
        }
        else if(withdrawAns.withdrawMethod === "enter_Amount"){
            let enter_AmountAns = await inquirer.prompt([
                {
                 name: "enter_Amount",
                 type: "number",
                 message: "Enter the amount to withdraw :"
                 
                }
            ]); 
            if(enter_AmountAns.enter_Amount > myBalance){
               console.log(chalk.red("Insufficient Balance"));
            }
            else{
                myBalance -= enter_AmountAns.enter_Amount
                console.log(`${enter_AmountAns.enter_Amount} withdraw successfully`)
                console.log(`Your remaining balance is: ${myBalance}`);
            } 
        }
        
    }  
    else if (operationAns.operation === "Check Balance"){
        console.log(chalk.yellow(`Your Account Balance is: ${myBalance}`));
    }    
} 
else{
        console.log(chalk.red("Pin is incorrect, try again!"));
    }

