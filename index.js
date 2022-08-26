// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");
const fs = require("fs");

// TODO: Create an array of questions for user input
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
    message: "What is the name of your github username? ",
    name: "username",
  },
  {
    type: "input",
    message: "What is your email address? ",
    name: "email",
  },
  {
    type: "input",
    message: "Describe how to install your project dependencies: ",
    name: "installation",
  },
  {
    type: "input",
    message: "Describe the usage of your application?",
    name: "usage",
  },
  {
    type: "list",
    default: "MIT",
    choices: ["MIT", "Apache", "ISC Licence", "GNU GPLv3", "GNU GPLv3"],
    message: "Choose a license for your application: ",
    name: "license",
  },
  {
    type: "input",
    default: "no contributors",
    message: "Explain how to contribute to your application: ",
    name: "contributing",
  },
  {
    type: "input",
    message: "Explain how to test your application: ",
    name: "tests",
  },
  {
    type: "input",
    default: "If there are any questions then you can contact me via:",
    message: "Enter introduction for questions section:  ",
    name: "questions",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  // generateMarkdown(data);

  fs.writeFile(fileName, data, (error) =>
    error ? console.error(error) : console.log(data + " Success!")
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((responses) => {
      writeToFile("newREADME.md", generateMarkdown(responses));
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
        console.log("Prompt couldn't be rendered in the current environment");
      } else {
        // Something else went wrong
        console.log("Something else went wrong");
      }
    });
}
// Function call to initialize app
init();
