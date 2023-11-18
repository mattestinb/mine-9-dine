
const inquirer = require("inquirer");
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require("fs");


//Prompt the user for information about the project
const questions = [{
         type: 'input',
         message: 'README GENERATOR ------ What is your name?',
         name: 'name',
},
    {
        type: 'input',
         message: 'What is your GitHub username?',
         name: 'username',
    },
    {
        type: 'input',
        message: 'What is the project title?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Enter your email:',
        name: 'email',
    },
    {
        type: 'input',
        message: 'Enter a description for your project:',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Enter instructions for installation:',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Enter instructions for usage:',
        name: 'usage',
    },
    {
        type: 'list',
        message: "Please choose a licensing option:",
        name: 'license',
        choices: ['MIT', 'Apache 2.0', 'GPLv3', 'None' ]
    },
    {
        type: 'input',
        message: 'How can you contribute to this project?',
        name: 'contribute',
    },
    {
        type: 'input',
        message: 'Test instructions for this project:',
        name: 'test',
    },
    {
        type: 'input',
        message: 'Enter demo-video link for this project:',
        name: 'video',
    }



];
//Function to write readme file
const writeToFile = data => {
    return new Promise((resolve, reject) => {

        fs.writeFile('NEW-README.md', data, err => {

            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: console.log('NEW-README.md Generated.')
            });

        })
    })
}

// Initialize app
const init = () => {
    return inquirer.prompt(questions);
}

// Function call to initialize app
init()
    .then(userInput => {
        return generateMarkdown(userInput);
    })
    .then(readmeInfo => {
        return writeToFile(readmeInfo);
    })
    .catch(err => {
        console.log(err);
    })


