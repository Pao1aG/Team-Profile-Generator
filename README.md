# Team-Profile-Generator

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

This application is run with Node.js. The user can a generate a Team Profile webpage with their employees' basic information by answering a series of questions in the command line. The questions were generated using the inquirer dependency.


Units tests were performed using the jest dependency.

## Table of Contents

* [License](#license)

* [Installation](#installation)

* [Usage](#usage)

* [Testing](#testing)

* [Credits](#credits)

* [Questions](#questions)

---

## License

This project is licensed under the MIT License. To learn more visit:   
> [MIT License](https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt)

## Installation

To install the inquirer dependency, use: 

```
npm i inquirer
```

## Usage

To initialize the app, right-click on the index.js file and choose 'Open in Integrated Terminal'.

In the command line type the following and press enter:

```
node index.js
```
The program will initialize and a series of questions will be presented to you. You can type in the employee's name, choose their role, type in their email, and an additional piece of information such as their office, GitHub username, or school depending on the employee type. Once you have completed the prompts, an HTML file will be generated. You can access this file in the 'dist' folder. The included CSS file will add the necessary styling to the webpage and can be modified to fit your preference. 

> For a demo of this application, [Watch Here]()

## Testing

If you want to perform unit tests for the class modules, first install the jest dependency using this command:

```
npm i jest
```

To test each individual module, right-click on the __tests__ folder and choose 'Open with Integrated Terminal'.  To test the module use this command:

```
npm run test <test file>
```

For example, if you want to run a test for the Engineer.test.js, it should read like this:

```
npm run test Employee.test.js
```

## Credits

MIT badge was accessed from GitHub user [Lukas Himsel](https://gist.github.com/lukas-h)


You can access a list of their markdown badges here: <https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba>

## Questions

If you have any questions, please contact me at: paolaagonzalezm@email.arizona.edu.