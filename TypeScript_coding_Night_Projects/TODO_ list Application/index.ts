#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

let todoList: string [] = [];
let conditions = true;

// print to wellcom messgae
console.log(chalk.blue.bold(`\n \t\t <<<<<=========================================>>>>>`));
console.log(chalk.blue.bold(` <<<<========>>>> ${chalk.bgGreenBright(' Wellcome to Anum - Todo-List Application')} <<<<========>>>>`));
console.log(chalk.blue.bold(`\t\t <<<<<===========================================>>>>>\n`));
  
//    while(conditions){
//    let addTask = await inquirer.prompt([
//       {
//          name: "task",
//          type: "input",
//          message: chalk.magenta("Enter your new task :")
//       }
//    ]);
//    todoList.push(addTask.task);
//    console.log(`${addTask.task} Task added in Todo-List successfully`);

//    let addMoreTask = await inquirer.prompt([
//       {
//          name: "addmore",
//          type: "confirm",
//          message: "Do you want to add more task ?",
//          default: "false"
//       }   
//    ]);

//    conditions = addMoreTask.addmore
//    }   
// console.log("Your update Todo-List:" ,  todoList);


let main = async () => {
    while(conditions){
        let option = await inquirer.prompt([
            {
             name: "choice",
             message: "Select an option you want to do:",
             type: "list",
             choices: ["Add task", "Delete task", "Update task", "View Todo_list", "Exit"]
            }
        ]);
        if(option.choice === "Add task"){
            await addTask()
        }
        else if(option.choice === "Delete task"){
            await deleteTask()
        }
        else if(option.choice === "Update task"){
            await updateTask()
        }
        else if(option.choice === "View Todo_list"){
            await  viewTask()
        }
        else if(option.choice === "Exit"){
            conditions = false; 
        }
    }
}

let addTask = async () => {
    let newTask = await inquirer.prompt([
        {
            name: "task",
            message: "Enter your new task :",
            type: "input"
        }
    ]);
    todoList.push(newTask.task);
    console.log(`\n ${newTask.task} task added successfully in todo_list`);
}

//function to view all Todo_List tasks
let viewTask =() => {
    console.log("\n Your Todo_lisk: \n");
    todoList.forEach((task, index) => {
        console.log(`${index + 1}: ${task}`);
    });
}

// function to delete a task from the list
let deleteTask = async () => {
    await viewTask()
    let taskIndex = await inquirer.prompt([
        {
            name: "index",
            message: "Enter the 'index number' of the task you want to delete :",
            type: "number",
        }
    ]);
    let deleteTask = todoList.splice(taskIndex.index - 1, 1);
    console.log(`\n ${deleteTask} this task has been deleted successfully from your Todo_list\n`);
} 

// function to update a task
let updateTask = async () => {
    await viewTask()
    let update_task_index = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "Enter the 'index number' of the task your want to update : "
        },
        {
            name: "new_task",
            type: "input",
            message: "Now enter new task name :"
        }
    ]);
    todoList[update_task_index.index - 1] = update_task_index.new_task
    console.log(`\n Task at index number ${update_task_index.index - 1} update  successfully [ For updated list check option: 'view Todo_list']`)
}
main();