//Packages and modules for application
const inquirer = require("inquirer"); 
const fs = require("fs");
const appendJs = require("./append.js");

//QUESTIONS FOR INQUIRER
const questions = [
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
    {
        type: "list",
        message: "Would you like to add another team member?",
        name: "continue",
        choices: ["yes", "no"],
    },

    //For Manager only
    {
        type: "input",
        message: "Office Number:",
        name: "office",
    },
    //For Engineer only
    {
        type: "input",
        message: "GitHub Username:",
        name: "github",
    },
    //For Intern only
    {
        type: "input",
        message: "School:",
        name: "school",
    },
]

//FUNCTION FOR INQUIRER
function writeHTML () {
    inquirer
    .prompt(questions) 
    .then(function(member) {
        console.log("Team member: ", member); //success
        fs.writeFile("./dist/index.html"), generateHTML(member), function(err) {
            console.log("Files have been successfully written!")
        }

        generateHTML(member);

        // cardManager(member); //these are here for testing
        // cardEngineer(member); //these are here for testing
        // cardIntern(member); //these are here for testing
    })
}
writeHTML();

//THESE NEED TO BE SENT TO DIFFERENT MODULE----------------------------

// FUNCTION TO CREATE CARD
// located in append.js


//FUNCTION TO EDIT CARD FOR MANAGER
function cardManager (data) {
    if(data.role == "Manager") {
        console.log("Manager was chosen");
        document.querySelector(".memberName").textContent = `${data.name}`;
        document.querySelector(".memberRole").textContent="Manager";
        document.querySelector(".memberDetail").textContent = `Office Number: ${data.office}`;
    } else {
        return;
    }
}

//FUNCTION TO EDIT CARD FOR ENGINEER
function cardEngineer(data) {
    if(data.role == "Engineer") {
        console.log("Engineer was chosen");
        document.querySelector(".memberName").textContent = `${data.name}`;
        document.querySelector(".memberRole").textContent="Engineer";
        document.querySelector(".memberDetail").textContent = `GitHub: ${data.github}`;
    } else {
        return;
    }
}

//FUNCTION TO EDIT CARD FOR INTERN
function cardIntern(data) {
    if(data.role == "Intern") {
        console.log("Intern was chosen");
        document.querySelector(".memberName").textContent = `${data.name}`;
        document.querySelector(".memberRole").textContent="Intern";
        document.querySelector(".memberDetail").textContent= `School: ${data.school}`;

    } else {
        return;
    }
}

//FUNCTION TO GENERATE HTML
function generateHTML(data) {
    appendCard (data); //Function to generate HTML elements for card
    if(data.role == "Manager") {
        cardManager(data); //As soon as the HTML is created, these functions will fill in the correct data
    }
    // cardEngineer(data);
    // cardIntern(data);
    return `<!DOCTYPE html>
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

    <button type = "button">Test Button</button>
    <div class = "appendCards">
        <!--These cards need to be appended-->
        <div class = "teamCards">
            <div class= "cardHeader">
                <div class = "memberName">
                    Member Name
                </div>
                <div class = "memberRole">
                    Role
                </div>
            </div>
            <div class = "cardContent">
                <div>
                    <p class= "memberID"> ID: Number </p>
                </div>
                <div> 
                    <p class= "memberEmail">Email: email@email.com</p>
                </div>
                <div>
                    <p class= "memberDetail"> Office, GitHub, School</p>
                </div>
            </div>
        </div>
    </div>
    
    <script src="append.js"></script>
</body>
</html>
    `
}