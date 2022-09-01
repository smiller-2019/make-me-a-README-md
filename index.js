// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");
const fs = require("fs");

// TODO: Create an array of questions for user input
// referenced https://github.com/Kay0s/Create-ReadMe-With-Inquirer-NPM
const questions = [
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
  },
  {
    type: "input",
    message: "Give a description of your project: ",
    name: "description",
  },
  {
    type: "input",
    default: "In the terminal or bash enter 'npm install'",
    message: "Describe how to install your project dependencies: ",
    name: "installation",
  },
  {
    type: "input",
    message: "How to use this application:",
    name: "usage",
  },
  {
    type: "list",
    default: "MIT",
    choices: ["MIT", "Apache", "ISC Licence", "GNU GPLv3", "None"],
    message: "Choose a license for your application: ",
    name: "license",
  },
  {
    type: "input",
    default: ` Please fork the repo and create a pull request as follows: 
    1. Fork the Project
    2. Create your Feature Branch.
    3. Commit your Changes.
    4. Push to the Branch.
    5. Open a Pull Request 
    Open a Github issue with the tag 'improvements'`,
    message: "How to contribute: ",
    name: "contributing",
  },
  {
    type: "input",
    message: "Explain how to test your application: ",
    name: "tests",
  },
  {
    type: "input",
    message: "What is the name of your github username? ",
    name: "username",
  },
  {
    type: "input",
    message: "What is your email address? ",
    name: "email",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (error) =>
    error ? console.error(error) : console.log(" Success!")
  );
}

// TODO: Create a function to initialize app
// referenced https://pakstech.com/blog/inquirer-js/
function init() {
  inquirer
    .prompt(questions)
    .then((responses) => {
      writeToFile("./dist/README.md", generateMarkdown(responses));
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt could not process the data
        console.log("Prompt could not process the data!");
      } else {
        // Something went wrong
        console.log("Something went wrong!");
      }
    });
}
// Function call to initialize app
init();
