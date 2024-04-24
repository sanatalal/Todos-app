#! /usr/bin/env node
import inquirer from "inquirer";
let todos = []; //shopper
let results = true;
while (results) {
    let todosQuestions = await inquirer.prompt([
        {
            name: "firstQuestion",
            type: "input",
            message: "What would you like to add in your todos?"
        },
        {
            name: "secondQuestion",
            type: "confirm",
            message: "Would you like to more in yor todos?",
            default: "true"
        }
    ]);
    todos.push(todosQuestions.firstQuestion);
    console.log(todos);
    results = todosQuestions.secondQuestion;
}
;
