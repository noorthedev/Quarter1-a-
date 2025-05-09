#! /usr/bin/env node

//       object Oriented Programming | OOP|   => Method => ko use kia hai?

import inquirer from "inquirer";
import Choices from "inquirer/lib/objects/choices.js";
import chalk from "chalk";


// Define the student class
class Student{
    static counter = 10000;
    id: number;
    name: string;
    courses: string[];
    balance: number;

    constructor(name: string ){
        this.id = Student.counter++;
        this.name =name;
        this.courses = [];      // initialize an empty array for courses
        this.balance = 100; 
    }

    // Method to enroll a student in a course
    enroll_course(course: string){
        this.courses.push(course);
        
    }

    // Method to view a student balance

     view_balance(){
        console.log(chalk.magentaBright(`\n t\balance for ${this.name} : $${this.balance}\n `));
     }
     // Method to pay student fees
     pay_fees(amount: number){
        this.balance -= amount;
        console.log(`$${amount}fees paid successfully for ${this.name}`);
        console.log(chalk.yellow(`\n \tRemaining balance : $${this.balance}\n`));
     }
         
     // Method to display student status
     show_status(){
        console.log(`ID: ${this.id} `);
        console.log(`Name: ${this.name}`);
        console.log(`Courses: ${this.courses}`);
        console.log(`Balance: ${this.balance}`);
     }
}

// Defining a Student_maneger class to massage Students
class Student_manager {
   Students: Student[]
   
   constructor(){
      this.Students = [];
   }
   // Method to add a new Student
   add_student(name: string){
      let student = new Student(name);
      this.Students.push(student)
      console.log(chalk.green(`\n \tStudent: ${name} added successfully. student ID: ${student.id} \n`));
   }  

   // Method to enroll a student in a course
   enroll_student(student_id: number, course: string){
      let student = this.find_student(student_id);
      if (student){
         student.enroll_course(course);
         console.log(`${student.name} enrolled in ${course} successfully`);
      }
   }

   // Method to view a student balance
   view_student_balance(student_id: number){
      let student = this.find_student(student_id);
      if(student ){
         student.view_balance();
      }
      else{
         console.log(chalk.red('\n \tstudent not found. please enter a correct student id\n'))
      }
   }
   // Method to pay student fees 
   pay_student_fees(student_id: number, amount: number){
      let student = this.find_student(student_id);
      if (student){
         student.pay_fees(amount);
      }
      else{
         console.log(chalk.red('\n \tstudent not found. please enter a correct student id\n'))
      }
   }

   // Method to display student status
   show_student_status(student_id: number){
      let student = this.find_student(student_id);
      if(student){
         student.show_status();
      }
      
   }
   

   // Method to find a student by student_id
   find_student(student_id: number){
    return  this.Students.find(std => std.id === student_id)
   }


   
}

// Main function to run the program
async function main(){
   console.log(chalk.blue('\n \t Welcome to "NoorAnum" - student Management system\n'));
   console.log("=".repeat(60));        // is - ko 60 time print hoga    

  let student_manager = new Student_manager();

  // while loop to keep program running
  while(true){
     let choice = await inquirer.prompt([
        {
          name: "choice",
          type: "list",
          message: "Select an option",
          choices: [
             "Add student",
             "Enroll student",
             "View student Balance",
             "Pay Fees",
             "Show status",
             "Exit"
            ]
        }
     ])

     // using Switch case  to user choice
     switch(choice.choice){
       case "Add student":
          let name_input = await inquirer.prompt([
              {
                name: "name",
                type: "input",
                message: "Enter a student name"
              }
            ]);
            student_manager.add_student(name_input.name);
            break;

         case "Enroll student":
            let course_input = await inquirer.prompt([
               {
                  name: "student_id",
                  type: "number",
                  message: "Enter a student id",
               },
               {
                  name: "course",
                  type: "input",
                  message: "Enter a course name",

               }
            ]);
            student_manager.enroll_student(course_input.student_id,course_input.course);
            break;
         case "View student Balance":
            let balance_input = await inquirer.prompt([
               {
                  name: "student_id",
                  type: "number",
                  message: "Enter a student id",

               }
            ]);
            student_manager.view_student_balance(balance_input.student_id);
            break;
         case "Pay Fees":
            let fees_input = await inquirer.prompt([
               {
                  name: "student_id",
                  type: "number",
                  message: "Enter a student id",
               },
               {
                  name: "amount",
                  type: "number",
                  message: "Enter the amount to pay "
               }
            ]);
            student_manager.pay_student_fees(fees_input.student_id, fees_input.amount);
            break;
         case "Show status":
            let student_input = await inquirer.prompt([
               {
                  name: "student_id",
                  type: "number",
                  message: "Enter a student id"
               }
            ]);
            student_manager.show_student_status(student_input.student_id);
            break;
         case "Exit":
            console.log('Exiting......');
            process.exit();

      }
   }
}

// Calling a main function
main();




