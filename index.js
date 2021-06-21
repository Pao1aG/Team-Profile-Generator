//Packages and modules for application
const inquirer = require("inquirer"); 
const fs = require("fs");

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
                let thirdTag = "Office "

                if(role.continue == true && ".dist/index.html" != null) {
                    fs.appendFile("./dist/index.html", generateFirstHTML(member, role, thirdTag), function(err) {
                        // console.log("adding more members");
                    });
                    writeHTML();

                } else if (role.continue == true){
                    fs.appendFile("./dist/index.html", generateFirstHTML(member, role, thirdTag), function(err) {
                        console.log("HTML file has been successfully created!");
                    });

                    writeHTML();
                } else {
                    fs.appendFile("./dist/index.html", generateLastHTML(member, role, thirdTag), function(err) {
                        console.log("HTML file has been successfully created!");
                    });
                };
            });
        } else if (member.role == "Engineer") {
            // console.log("engineer was chosen");
            inquirer.prompt(engineerQ).then(function(role) {
                let thirdTag = "GitHub "
                let githubLink = "https://github.com/"

                if(role.continue == true && ".dist/index.html" != null) {
                    fs.appendFile("./dist/index.html", generateFirstHTML(member, role, thirdTag, githubLink), function(err) {
                        // console.log("adding more members");
                    });
                    writeHTML();

                } else if (role.continue == true){
                    fs.appendFile("./dist/index.html", generateFirstHTML(member, role, thirdTag, githubLink), function(err) {
                        console.log("HTML file has been successfully created!");
                    });

                    writeHTML();
                } else {
                    fs.appendFile("./dist/index.html", generateLastHTML(member, role, thirdTag, githubLink), function(err) {
                        console.log("HTML file has been successfully created!");
                    });
                };
            });
        } else {
            // console.log("intern was chosen")
            inquirer.prompt(internQ).then(function(role) {
                let thirdTag = "School "

                if(role.continue == true && ".dist/index.html" != null) {
                    fs.appendFile("./dist/index.html", generateFirstHTML(member, role, thirdTag), function(err) {
                        // console.log("adding more members");
                    })
                    writeHTML();

                } else if (role.continue == true){
                    fs.appendFile("./dist/index.html", generateFirstHTML(member, role, thirdTag), function(err) {
                        console.log("HTML file has been successfully created!");
                    })

                    writeHTML();
                } else {
                    fs.appendFile("./dist/index.html", generateLastHTML(member, role, thirdTag), function(err) {
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


function generateFirstHTML(member, role, tag, git) {
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
                    <p class= "memberEmail"><a onclick="window.open('mailto:${member.email}','_blank')">Email: ${member.email}</a></p>
                </div>
                <div>
                    <p class= "memberDetail"><a href='https://github.com/${role.third}' target="_blank">${tag}: ${role.third}</a></p>
                </div>
            </div>
        </div>`

return card;
};


//FUNCTION TO GENERATE HTML
function generateLastHTML(member, role, tag, git) {
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
                    <p class= "memberEmail"><a onclick="window.open('mailto:${member.email}','_blank')">Email: ${member.email}</a></p>
                </div>
                <div>
                    <p class= "memberDetail"><a href='https://github.com/${role.third}' target="_blank">${tag}: ${role.third}</a></p>
                </div>
            </div>
        </div>`

return card + str_end;
};