//packaged needed
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');
//questions
const questions = [
    {
        type: 'input',
        message: 'What is your github user name?',
        name: 'username',
      },
      {
        type: 'input',
        message: 'Whats your email?',
        name: 'email',
      },
      {
        type: 'input',
        message: 'whats the project name?',
        name: 'projectName',
      },
      {
        type: 'input',
        message: 'Please give a brief descripton of your project.',
        name: 'description',
      },
      {
        type: 'rawlist',
        message: 'What kind of license should your project have?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'none',],
        name: 'license',
      },
      {
        type: 'input',
        message: 'What command should be run to install dependencies?',
        name: 'command',
      },
      {
        type: 'input',
        message: 'What command should be run to run tests?',
        name: 'tests',
      },
      {
        type: 'input',
        message: 'What does the user need to know about using this repo?',
        name: 'endInfo',
      },
      {
        type: 'input',
        message: 'What does the user need to know about contributing to the repo?',
        name: 'moreInfo',
      },
    ];

    //Creates ReadMe
    function writeToFile(fileName, data){
        return fs.writeFileSync(path.join(process.cwd(), fileName), data);
    }

    // Initiallization!

    function init(){
        inquirer.prompt(questions).then((answers) => {
            console.log("Generating README.md...");
            writeToFile("README.md", generateMarkdown({...answers}));
        });
    }
    init();
