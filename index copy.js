//Packages and modules for application
const inquirer = require("inquirer"); 
const fs = require("fs");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");

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
                const mgr = new Manager(member.name, member.email, member.id, member.third);
                let thirdTag = "Office ";
                fs.appendFile("./dist/index.html", generateHTML(mgr, role, thirdTag), function(err) {});
                
                if(role.continue == true) {
                    writeHTML();
                }
            });
        }
    });
};

function init () {
    writeHTML(inquirer);
    fs.appendFile("./dist/index.html", generateLastHTML(), function(err) {});
}
init();


function generateHTML(employee, role, tag) {
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
                    <p class= "memberDetail"><a href='https://github.com/${role.third}' target="_blank">${tag}: ${role.third}</a></p>
                </div>
            </div>
        </div>`

return card;
};


//FUNCTION TO GENERATE HTML
function generateLastHTML() {
    var str_end = `</div>
</body>
</html>
`
return str_end;
};