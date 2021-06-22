//QUESTIONS FOR INQUIRER

managerQ = [
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

module.exports = managerQ