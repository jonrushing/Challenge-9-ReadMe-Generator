// TODO: Include packages needed for this application
const fs = require('fs');
const inquire = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {   name: 'title',
        type: 'input',
        message: 'What is the title of your project?',
    },
    {   name: 'description',
        type: 'input',
        message: 'Describe your project.',
    },
    {   name: 'install',
        type: 'input',
        message: 'How can the user install this project?',
    },
    {   name: 'use',
        type: 'input',
        message: 'How does the user use this project?',
    },
    {   name: 'ifContribute',
        type: 'confirm',
        message: 'Can others contribute to this project?',
        default: true
    },
    {   name: 'contribute',
        type: 'input',
        message: 'How can others contribute to this project?',
        when:({ifContribute}) => {
        if(ifContribute) {
            return true;
        } else {
            return false;
        }
        }
    },
    {   name: 'test',
        type: 'input',
        message: 'How can a user test this project?',
    },
    {   name: 'license',
        type: 'list',
        message: 'Please select a license for this project?',
        choices: ['MIT','Mozilla Public License 2.0','Apache License 2.0','None']
    },
    {   name: 'gitUser',
        type: 'input',
        message: 'What is your GitHub user name?',
    },
    {   name: 'email',
        type: 'input',
        message: 'What is your E-mail adress?',
    },
    
];

// TODO: Create a function to write README file
function createReadME() {
fs.writeFile('README.md', content, (err) =>
err ? console.error(err) : console.log("ReadMe Created!")) 
}

// TODO: Create a function to initialize app
function init() {
    inquire.prompt(questions).then((data) => {
        generateMarkdown(data).then((content) => {
        createReadME(content)
        })
    });
    
}

// Function call to initialize app
init();
