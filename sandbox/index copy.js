//Packages and modules for application
const inquirer = require("inquirer"); 
const fs = require("fs");
const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");

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
            inquirer.prompt(managerQ).then(function(role){
                const mgr = new Manager(member.name, member.email, member.id, role.third);
                let thirdTag = "Office";

                if(role.continue == true) {
                    fs.appendFile("./sandbox/index.html", generateHTML(mgr, thirdTag), function(err) {
                        // console.log("adding more members");
                    });
                    writeHTML();

                } else {
                    fs.appendFile("./sandbox/index.html", generateHTML(mgr, thirdTag), function(err) {
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
                    fs.appendFile("./sandbox/index.html", generateHTML(eng, thirdTag, gitLink), function(err) {
                        // console.log("adding more members");
                    });
                    writeHTML();

                } else {
                    fs.appendFile("./sandbox/index.html", generateHTML(eng, thirdTag, gitLink), function(err) {
                        console.log("HTML file has been successfully created!");
                    });
                };
            });
        } else {
            inquirer.prompt(internQ).then(function(role){
                const int = new Intern(member.name, member.email, member.id, role.third);
                let thirdTag = "School";

                if(role.continue == true) {
                    fs.appendFile("./sandbox/index.html", generateHTML(int, thirdTag), function(err) {
                        // console.log("adding more members");
                    });
                    writeHTML();

                } else {
                    fs.appendFile("./sandbox/index.html", generateHTML(int, thirdTag), function(err) {
                        console.log("HTML file has been successfully created!");
                    });
                };
            });
        };
    });
};

function init () {
    fs.writeFile("./sandbox/index.html", generateFirstHTML(), function(err){});
    writeHTML(inquirer);
    fs.appendFile("./sandbox/index.html", generateLastHTML(), function(err) {});
}
init();


function generateHTML(employee, tag, git) {
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

function generateFirstHTML() {
    var str_start = `<!DOCTYPE html>
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
    return str_start;
}
 

//FUNCTION TO GENERATE LAST HTML
function generateLastHTML() {
    var str_end = `</div>
</body>
</html>
`
return str_end;
};