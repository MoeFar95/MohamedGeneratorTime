// TODO: Include packages needed for this application

const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown');



const questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title",
    },
    {
        type: "input",
        message: "What is your project's description?",
        name: "description",
    },
    {
        type: "checkbox",
        message: "How is this project licensed?",
        name: "license",
        choices: ["MIT", "Apache", "None"],
    },
    {
        type: "input",
        message: "What goals did you have when building your project?",
        name: "goals",
    },
    {
        type: "input",
        message: "What motivated you to build this project",
        name: "motivation",
    },
    {
        type: "Input",
        message: "What are your project's installation instructions?",
        name: "install",
        default: "npm i",
    },
    {
        type: "input",
        message: "What is your project's intended use?",
        name: "usage",
    },
    {
        type: "input",
        message: "What technologies does your project use?",
        name: "tech",
    },
    {
        type:"input",
        message: "What problems did you face when designing this project?",
        name: "problems",
    },
    {
        type: "input",
        message:"What commands should be run to test your project?",
        name: "test",
    },
    {
        type: "input",
        message: "Who needs credit on this project?",
        name: "credits",
    },
    {
        type: "input",
        message: "How does someone contribute to this project?",
        name: "contribution",
    },
    {
        type:"input",
        message:"What resources were used to make this project?",
        name:"resources",
    },
    {
        type: "input",
        message: "What is your email?",
        name: "contact",
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "github"
    },
    {
        type:"input",
        message:"Who is the Author of this project?",
        name:"author",
    },
    {
        type:"input",
        message:"What year was this project created?",
        name:"year",
    },
];


function writeToFile(filename, data) 
{
    return fs.writeFileSync(path.join(process.cwd(), filename), data);
}

function init() 
{
    inquirer.prompt(questions).then(response => {
    writeToFile("sampleREADME.md", generateMarkdown(response))
    });
}

// function call to initialize program
init();