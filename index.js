//Packages and modules for application
const inquirer = require("inquirer"); 
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const firstHTML = require("./src/firstHTML.js");
const mainQ = require("./src/mainQ.js");
const managerQ = require("./src/managerQ");
const engineerQ = require("./src/engineerQ");
const internQ = require("./src/internQ");


// FUNCTION FOR INQUIRER
function writeHTML () {
    inquirer
    .prompt(mainQ) 
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

function init () {

    fs.writeFile("./dist/index.html", firstHTML, function(err) {});
    writeHTML(inquirer);
}
init();