// node modules
const inquirer = require("inquirer");
const fs = require('fs');


// team profiles
const Manager = require(".lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/engineer");

inquirer
  .prompt([
    {
      type: "input",
      message: "who is the manager of the team:",
      name: "name",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter the managers name.");
          return false;
        }
      },
    },

    {
      type: "input",
      message: "Please enter the managers ID:",
      name: "id",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter the managers ID.");
          return false;
        }
      },
    },
    {
      type: "input",
      message: "Please enter the managers email:",
      name: "email",
      // do I need to validate the email?
      validate: (nameInput) => {
        valid =
        if (valid) {
          return true;
        } else {
          console.log("Please enter the managers email.");
          return false;
        }
      },
    },
    {
      type: "input",
      message: "Please enter the managers office number:",
      name: "officeNumber",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter the managers office number.");
          return false;
        }
      },
    },
  ])
  .then(managerInput) => {
      // how to add managers input

      //===============================

      // adding employee, engineer or intern

      inquirer
      .prompt([
        {
          type: "list",
          message: "Please choose your employees role",
          name: "role",
          choices: ["Engineer", "Intern"]
        },
    
        {
          type: "input",
          message: "What is the name of your employee?:",
          name: "name",
          validate: (nameInput) => {
            if (nameInput) {
              return true;
            } else {
              console.log("Please enter your employees name.");
              return false;
            }
          },
        },
        {
          type: "input",
          message: "Please enter the employees ID:",
          name: "id",
          validate: (nameInput) => {
            if (nameInput) {
              return true;
            } else {
              console.log("Please enter the employees ID.");
              return false;
            }
          },
        },
        {
          type: "input",
          message: "Please enter the employees email:",
          name: "email",
          validate: email => {
              valid = // validate email?
            if (valid) {
              return true;
            } else {
              console.log("Please enter the employees email.");
              return false;
            }
          },
        },
        {
            type: "input",
            message: "Please enter the Engineer's GitHub username:",
            name: "github",
            when: (input) => input.role === "Engineer",
            validate: (nameInput) => {
              if (nameInput) {
                return true;
              } else {
                console.log("Please enter the employees GitHub username.");
              }
            },
          },
          {
            type: "input",
            message: "Please enter the Intern's school:",
            name: "school",
            when: (input) => input.role === "Intern",
            validate: (nameInput) => {
              if (nameInput) {
                return true;
              } else {
                console.log("Please enter the Intern's school.");
              }
            },
          },
          {
              type: "confirm",
              name: "confirmAddEmployee",
              message: "Would you like to add another employee?",
              default: false
          }
      ])
      .then(employeeInput) => {
    
    fs.writeFile("./index.html", htmlPageContent, (err) =>
      err ? console.log(err) : console.log("Successfully created a Team Profile!")
  );
  }); 

  return result;
};













// module.exports = Game;
