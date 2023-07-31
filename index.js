const inquirer = require('inquirer');
const fs = require("fs");
const generateMarkdown = require('./utils/generateMarkdown');

// // TODO: Include packages needed for this application

// const { default: inquirer } = require("inquirer");

// // TODO: Create an array of questions for user input
// const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();

const questions = [
    {
        type:"input",
        message:"what is the project named?",
        name:"title",

    },
    {
        type:"input",
        message:"installation instructions",
        name:"installation"
    },
    {
        type:"input",
        message:"usage information",
        name:"usage",
    },
    {
        type:"input",
        message:"contribution guidelines",
        name:"contribution",
    },
    {
        type:"input",
        message:"testing instructions",
        name:"test",
    },
    {
        type:"list",
        message:"what license did you use",
        choices:["Apache 2.0", "MIT", "None",],
        name:"license",
    },
]

inquirer

    .prompt(questions).then(anwsers => {
        console.log(anwsers)
        const text=generateMarkdown(anwsers)
        fs.writeFile("./output/README.md",text,(err)=>{
            if(err){
                console.log(err)
            }else{
                console.log("wrote file!")
            }
        })
    })
    // I enter a description, installation instructions, usage information, contribution guidelines, and test instructions