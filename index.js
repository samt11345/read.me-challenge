const inquirer = require('inquirer');
const fs = require("fs");
const generateMarkdown = require('./utils/generateMarkdown');

const questions = [
  {
    type: "input",
    message: "What is the project named?",
    name: "title",
  },
  {
    type: "input",
    message: "What is the project description?",
    name: "description",
  },
  {
    type: "input",
    message: "Installation instructions",
    name: "installation"
  },
  {
    type: "input",
    message: "Usage information",
    name: "usage",
  },
  {
    type: "input",
    message: "Contribution guidelines",
    name: "contribution",
  },
  {
    type: "input",
    message: "Testing instructions",
    name: "test",
  },
  {
    type: "list",
    message: "What license did you use?",
    choices: ["Apache 2.0", "mit", "None"],
    name: "license",
  },
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "github",
  },

  // Question for email address
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  }
];

inquirer.prompt(questions).then(answers => {
  console.log(answers);
  const text = generateMarkdown(answers);
  fs.writeFile("./output/README.md", text, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Wrote file!");
    }
  });
});
