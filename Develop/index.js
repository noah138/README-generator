// Packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// Lincense function
function getBadge(value) {
    if (value === 'GNU AGPLv3') {
        return '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-green.svg)](https://www.gnu.org/licenses/agpl-3.0)';
    } else if (value === 'GNU GPLv3') {
        return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-green.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    } else if (value === 'GNU LGPLv3') {
        return '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-green.svg)](https://www.gnu.org/licenses/lgpl-3.0)';
    } else if (value === 'Mozilla 2.0') {
        return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-yellow.svg)](https://opensource.org/licenses/MPL-2.0)';
    } else if (value === 'Apache 2.0') {
        return '[![License](https://img.shields.io/badge/License-Apache%202.0-green.svg)](https://opensource.org/licenses/Apache-2.0)';
    } else if (value === 'MIT') {
        return '[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)';
    } else if (value === 'Boost Software 1.0') {
        return '[![License](https://img.shields.io/badge/License-Boost%201.0-brightgreen.svg)](https://www.boost.org/LICENSE_1_0.txt)';
    } else {
        return '';
    }
}

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
        type: "list",
        name: "username",
        message: "What is your Github username?"
    },
    {
        type: "list",
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
        data.getBadge = getBadge(data.badge)
        writeToFile('sample.md', data);
    }))
}

// Function call to initialize app
init();