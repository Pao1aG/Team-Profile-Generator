//Packages and modules for application
const inquirer = require("inquirer"); 
const fs = require("fs");
const app = require("./src/app");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

//QUESTIONS FOR INQUIRER
const main = [
    {
        type: "input",
        message: "Team Member Name:",
        name: "name",

    },
    {
        type: "list",
        message: "Team Member Role:",
        name: "role",
        choices: ["Manager", "Engineer", "Intern"]

    },
    {
        type: "input",
        message: "ID Number:",
        name: "id",

    },
    {
        type: "input",
        message: "Email Address:",
        name: "email",
    },
]

const managerQ = [
    //For Manager only
    {
        type: "input",
        message: "Office Number:",
        name: "third",
    },
     {
        type: "confirm",
        message: "Would you like to add another team member?",
        name: "continue",
    },
]

const engineerQ = [
    //For Engineer only
    {
        type: "input",
        message: "GitHub Username:",
        name: "third",
    },
     {
        type: "confirm",
        message: "Would you like to add another team member?",
        name: "continue",
    },
]

const internQ = [
    //For Intern only
    {
        type: "input",
        message: "School:",
        name: "third",
    },
     {
        type: "confirm",
        message: "Would you like to add another team member?",
        name: "continue",
    },
]

// FUNCTION FOR INQUIRER
function writeHTML () {
    inquirer
    .prompt(main) 
    .then(function(member) {
        if(member.role == "Manager") {
            //Prompting questions for manager only
            inquirer.prompt(managerQ).then(function(role){
                //creating new Manager object with prototype properties
                const mgr = new Manager(member.name, member.email, member.id, role.third); //role.third is from managerQ and for getSpecial() class methods
                let thirdTag = "Office";

                if(role.continue == true) {
                    //Passing mgr object through generateFirstHTML function
                    fs.appendFile("./dist/index.html", appendHTML(mgr, thirdTag), function(err) {
                        // console.log("adding more members");
                    });
                    writeHTML();

                } else {
                    fs.appendFile("./dist/index.html", generateLastHTML(mgr, thirdTag), function(err) {
                        console.log("HTML file has been successfully created!");
                    });
                };
            });
        } else if (member.role == "Engineer") {
            inquirer.prompt(engineerQ).then(function(role){
                const eng = new Engineer(member.name, member.email, member.id, role.third);
                let thirdTag = "GitHub";
                let gitLink = "https://github.com/"

                if(role.continue == true) {
                    fs.appendFile("./dist/index.html", appendHTML(eng, thirdTag, gitLink), function(err) {
                        // console.log("adding more members");
                    });
                    writeHTML();

                } else {
                    fs.appendFile("./dist/index.html", generateLastHTML(eng, thirdTag, gitLink), function(err) {
                        console.log("HTML file has been successfully created!");
                    });
                };
            });
        } else {
            inquirer.prompt(internQ).then(function(role){
                const int = new Intern(member.name, member.email, member.id, role.third);
                let thirdTag = "School";

                if(role.continue == true) {
                    fs.appendFile("./dist/index.html", appendHTML(int, thirdTag), function(err) {
                        // console.log("adding more members");
                    });
                    writeHTML();

                } else {
                    fs.appendFile("./dist/index.html", generateLastHTML(int, thirdTag), function(err) {
                        console.log("HTML file has been successfully created!");
                    });
                };
            });
        };
    });
};

function init () {

    fs.writeFile("./dist/index.html", generateFirstHTML(), function(err) {
        // console.log("success in creating first html");
    });

    writeHTML(inquirer);
}
init();

//FUNCTION TO WRITE FIRST HTML
function generateFirstHTML() {
return`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/dist/style.css">
    <title>My Team</title>
</head>
<body>
    <h1> My Team</h1>

    <div class = "appendCards">`
}

//FUNCTION TO APPEND FIRST  HTML
function appendHTML(employee, tag, git) {
var card = `<div class = "teamCards">
            <div class= "cardHeader">
                <div class = "memberName">
                    ${employee.getName()}
                </div>
                <div class = "memberRole">
                    ${employee.getRole()}
                </div>
            </div>
            <div class = "cardContent">
                <div>
                    <p class= "memberID"> ID: ${employee.getId()} </p>
                </div>
                <div> 
                    <p class= "memberEmail"><a onclick="window.open('mailto:${employee.getEmail()}','_blank')">Email: ${employee.getEmail()}</a></p>
                </div>
                <div>
                    <p class= "memberDetail"><a href='${git}${employee.getSpecial()}' target="_blank">${tag}: ${employee.getSpecial()}</a></p>
                </div>
            </div>
        </div>`

return card;
};


//FUNCTION TO APPEND LAST HTML
function generateLastHTML(employee, tag, git) {
    var str_end = `</div>
</body>
</html>
`
var card = `<div class = "teamCards">
            <div class= "cardHeader">
                <div class = "memberName">
                ${employee.getName()}
                </div>
                <div class = "memberRole">
                ${employee.getRole()}
                </div>
            </div>
            <div class = "cardContent">
                <div>
                    <p class= "memberID"> ID: ${employee.getId()} </p>
                </div>
                <div> 
                    <p class= "memberEmail"><a onclick="window.open('mailto:${employee.getEmail()}','_blank')">Email: ${employee.getEmail()}</a></p>
                </div>
                <div>
                    <p class= "memberDetail"><a href='${git}${employee.getSpecial()}' target="_blank">${tag}: ${employee.getSpecial()}</a></p>
                </div>
            </div>
        </div>`

return card + str_end;
};