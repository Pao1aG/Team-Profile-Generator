//Packages and modules for application
const inquirer = require("inquirer"); 
const fs = require("fs");
// const appendCard = require("./dist/append.js");

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
            // console.log("manager was chosen");
            inquirer.prompt(managerQ).then(function(role){
                console.log("Team member: ", member); //success
                if(role.continue == true && ".dist/index.html" != null) {
                    fs.appendFile("./dist/index.html", generateFirstHTML(member, role), function(err) {
                        console.log("adding more members");
                    });
                    writeHTML();

                } else if (role.continue == true){
                    fs.appendFile("./dist/index.html", generateFirstHTML(member, role), function(err) {
                        console.log("HTML file has been successfully created!");
                    });

                    writeHTML();
                } else {
                    fs.appendFile("./dist/index.html", generateLastHTML(member, role), function(err) {
                        console.log("HTML file has been successfully created!");
                    });
                };
            });
        } else if (member.role == "Engineer") {
            // console.log("engineer was chosen");
            inquirer.prompt(engineerQ).then(function(role) {
                if(role.continue == true && ".dist/index.html" != null) {
                    fs.appendFile("./dist/index.html", generateFirstHTML(member, role), function(err) {
                        console.log("adding more members");
                    });
                    writeHTML();

                } else if (role.continue == true){
                    fs.appendFile("./dist/index.html", generateFirstHTML(member, role), function(err) {
                        console.log("HTML file has been successfully created!");
                    });

                    writeHTML();
                } else {
                    fs.appendFile("./dist/index.html", generateLastHTML(member, role), function(err) {
                        console.log("HTML file has been successfully created!");
                    });
                };
            });
        } else {
            // console.log("intern was chosen")
            inquirer.prompt(internQ).then(function(role) {
                if(role.continue == true && ".dist/index.html" != null) {
                    fs.appendFile("./dist/index.html", generateFirstHTML(member, role), function(err) {
                        console.log("adding more members");
                    })
                    writeHTML();

                } else if (role.continue == true){
                    fs.appendFile("./dist/index.html", generateFirstHTML(member, role), function(err) {
                        console.log("HTML file has been successfully created!");
                    })

                    writeHTML();
                } else {
                    fs.appendFile("./dist/index.html", generateLastHTML(member, role), function(err) {
                        console.log("HTML file has been successfully created!");
                    });
                };
            });
        };
    });
};

function init () {
    writeHTML(inquirer);
}
init();


function generateFirstHTML(member, role) {
var card = `<div class = "teamCards">
            <div class= "cardHeader">
                <div class = "memberName">
                    ${member.name}
                </div>
                <div class = "memberRole">
                    ${member.role}
                </div>
            </div>
            <div class = "cardContent">
                <div>
                    <p class= "memberID"> ID: ${member.id} </p>
                </div>
                <div> 
                    <p class= "memberEmail"> Email: ${member.email}</p>
                </div>
                <div>
                    <p class= "memberDetail"> Info: ${role.third}</p>
                </div>
            </div>
        </div>`

return card;
}


//FUNCTION TO GENERATE HTML
function generateLastHTML(member, role) {
    var str_end = `</div>
</body>
</html>
`

var card = `<div class = "teamCards">
            <div class= "cardHeader">
                <div class = "memberName">
                    ${member.name}
                </div>
                <div class = "memberRole">
                    ${member.role}
                </div>
            </div>
            <div class = "cardContent">
                <div>
                    <p class= "memberID"> ID: ${member.id} </p>
                </div>
                <div> 
                    <p class= "memberEmail"> Email: ${member.email}</p>
                </div>
                <div>
                    <p class= "memberDetail"> Info: ${role.third}</p>
                </div>
            </div>
        </div>`

return card + str_end;
}