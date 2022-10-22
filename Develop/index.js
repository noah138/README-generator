// Packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

const questions = [
    // Title
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    // Description
    {
        type: "input",
        name: "description",
        message: "What is the description for this project?"
    },
    // Installation
    {
        type: "input",
        name: "installation",
        message: "What are the steps required to install your project?"
    },
    // Usage
    {
        type: "input",
        name: "usage",
        message: "Provide instructions for how to use this project."
    },
    // Credits
    {
        type: "input",
        name: "credits",
        message: "List your collaborators, if any, with links to their GitHub profiles."
    },
    // Tests
    {
        type: "input",
        name: "tests",
        message: "Please list any test instructions for this project"
    },
    // License
    {
        type: "list",
        name: "license",
        message: "Please select a license for this project.",
        choices: [
            'GNU AGPLv3',
            'GNU GPLv3',
            'GNU LGPLv3',
            'Mozilla 2.0',
            'Apache 2.0',
            'MIT',
            'Boost Software 1.0',
        ],
    },
    // Contact
    {
        type: "input",
        name: "username",
        message: "What is your Github username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?",
        validate: function (address) {
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(address)) {
                return true;
            } else {
                return "You have entered an invalid email address!";
            }
        }
    },
];

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data),
    (err) => err ? console.error(err) : console.log('Success!'));
}

// Function to initialize app
function init() {
    inquirer.prompt(questions).then((data => {
        console.log(data);
        writeToFile('generated-README.md', data);
    }))
}

// Function call to initialize app
init();