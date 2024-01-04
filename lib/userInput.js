const inquirer = require('inquirer');
const fs = require('fs');

async function userInputs() {
    return await inquirer.prompt([
        {
            type: 'list',
            name: 'shape',
            message: 'Choose a shape for your logo!',
            choices: ['Circle', 'Triangle', 'Square'],
        },
        {
            type: 'list',
            name: 'textColor',
            message: 'What color do you want your text to be?',
            choices: ['black', 'white', 'grey'],
        },
        {
            type: 'list',
            name: 'color',
            message: 'What color do you want your shape to be?',
            choices: ["black", 'blue', 'purple', 'orange', 'green'],
        },
        {
            type: 'input',
            name: 'text',
            message: 'Enter up to three characters for the logo text:',
            validate: function (input) {
                return input.length <= 3 ? true : 'Please enter up to three characters.';
            },
        },
    ]);
}

module.exports = userInputs;