// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require('./utils/generateMarkdown');

// File system module (node package manager) import
const fs = require("fs");
// TODO: Create an array of questions for user input


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

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {
//     try {
//         fs.writeFileSync(fileName, data);
//         console.log(`Successfully wrote to ${fileName}`);
//     } catch (error) {
//         console.error(`Error writing to file: ${error.message}`);
//     }
// }
//
// // TODO: Create a function to initialize app
// function init() {}
//
// // Function call to initialize app
// init();
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


////////////////////////////////////
// Function to write README file


// const writeToFile = data => {
//     return new Promise((resolve, reject) => {
//         // make a readme file and add to dist folder
//         fs.writeFile('SAMPLE-README.md', data, err => {
//             // if there's an error, reject the Promise and send the error to .catch() method
//             if (err) {
//                 reject(err);
//                 // return out of the function here to make sure the Promise doesn't continut to execute the resolve() function
//                 return;
//             }
//             // if everything went well, resolve the Promise and send the successful data to the .then() method
//             resolve({
//                 ok: true,
//                 message: console.log('SAMPLE-README.md Generated.')
//             });
//
//         })
//     })
// }

// Initialize app
// const init = () => {
//     return inquirer.prompt(questions);
// }

// // Function call to initialize app
// init()
//     .then(userInput => {
//         return generateMarkdown(userInput);
//     })
//     .then(readmeInfo => {
//         return writeToFile(readmeInfo);
//     })
//     .catch(err => {
//         console.log(err);
//     })