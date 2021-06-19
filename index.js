//Packages and modules for application
const inquirer = require("inquirer"); 
const fs = require("fs");

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
        // fs.write("./dist/index.html"), generateHTML(member), function(err) {
        //     console.log("Files have been successfully written!")
        // }

        cardManager(member);
        cardEngineer(member);
        cardIntern(member);
    })
}
writeHTML();

//THESE NEED TO BE SENT TO DIFFERENT MODULE----------------------------

// FUNCTION TO CREATE CARD

// function appendCard () {
//     let placeCard = document.querySelector(".appendCards");
//     let divs = document.createElemment("div");
    
// }



//FUNCTION TO EDIT CARD FOR MANAGER
function cardManager (data) {
    if(data.role == "Manager") {
        console.log("Manager was chosen");
        //document.querySelector(".memberName").textContent = ${data.name};
        //document.querySelector(".memberRole").textContent="Manager";
        //document.querySelector(".memberDetail").textContent = `Office Number: ${data.office}`;
    } else {
        return;
    }
}

//FUNCTION TO EDIT CARD FOR ENGINEER
function cardEngineer(data) {
    if(data.role == "Engineer") {
        console.log("Engineer was chosen");
        //document.querySelector(".memberName").textContent = ${data.name};
        //document.querySelector(".memberRole").textContent="Engineer";
        //document.querySelector(".memberDetail").textContent = `GitHub: ${data.github}`;
    } else {
        return;
    }
}

//FUNCTION TO EDIT CARD FOR INTERN
function cardIntern(data) {
    if(data.role == "Intern") {
        console.log("Intern was chosen");
        //document.querySelector(".memberName").textContent = ${data.name};
        //document.querySelector(".memberRole").textContent="Intern";
        //document.querySelector(".memberDetail").textContent= `School: ${data.school}`;

    } else {
        return;
    }
}

//FUNCTION TO GENERATE HTML
function generateHTML(data) {
     //Function to generate HTML elements for card
    // appendCard ();
    return ` `
}