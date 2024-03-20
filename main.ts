#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

let answers = await inquirer.prompt([
    {
    message: "Enter First Number:",
    name: "FirstNumber",
    type: "number"},
    {
    message: "Enter Second Number:",
    name: "SecondNumber",
    type: "number"},
    {
    message: "Select One Operator to Perform Operation",
    name: "Operator",
    type: "list",
    choices:["Addition","Subtraction","Multiplication","Division"],
    }
]);

if(answers.Operator === "Addition"){
    console.log(answers.FirstNumber + answers.SecondNumber)
}
else if(answers.Operator === "Subtraction"){
    console.log(answers.FirstNumber - answers.SecondNumber)
}
else if(answers.Operator === "Multiplication"){
    console.log(answers.FirstNumber * answers.SecondNumber)
}
else if(answers.Operator === "Division"){
    console.log(answers.FirstNumber / answers.SecondNumber)
}
else{
    console.log('Invalid operator')
}