const renderHTML = require("./src/renderHTML");

// node modules
const inquirer = require("inquirer");
const fs = require("fs");

// team profiles
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

const teamArray = [];

const runApp = () => {
  const createTeam = () => {
    inquirer
      .prompt([
        {
          type: "list",
          message: "what type of employee would you like to add to your team?",
          name: "addEmployeePrompt",
          choices: [
            "Manager",
            "Engineer",
            "Intern",
            "No more team members are needed.",
          ],
        },
      ])
      .then(function (userInput) {
        switch (userInput.addEmployeePromp) {
          case "Manager":
            addManager();
            break;
          case "Engineer":
            addEngineer();
            break;
          case "Intern":
            addIntern();
            break;

          // default:
          //   htmlBuilder();
        }
      });
  };

  // adding manager
  addManager = () => {
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
          validate: (nameInput) => {
            if (nameInput) {
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

      .then((managerInput) => {
        const htmlPageContent = renderManagerHTML(managerInput);

        teamArray.push(manager);
        console.log(manager);

        fs.writeFile("./dist/index.html", htmlPageContent, (err) =>
          err
            ? console.log(err)
            : console.log("Successfully created manager profile!")
        );
      });
  };

  // adding engineer
  const addEngineer = () => {
    inquirer
      .prompt([
        {
          type: "input",
          message: "who is the engineer of the team:",
          name: "name",
          validate: (nameInput) => {
            if (nameInput) {
              return true;
            } else {
              console.log("Please enter the engineers name.");
              return false;
            }
          },
        },

        {
          type: "input",
          message: "Please enter the engineer ID:",
          name: "id",
          validate: (nameInput) => {
            if (nameInput) {
              return true;
            } else {
              console.log("Please enter the engineers ID.");
              return false;
            }
          },
        },
        {
          type: "input",
          message: "Please enter the engineers email:",
          name: "email",
          validate: (nameInput) => {
            if (nameInput) {
              return true;
            } else {
              console.log("Please enter the engineers email.");
              return false;
            }
          },
        },
        {
          type: "input",
          message: "Please enter the engineers GitHub username:",
          name: "officeNumber",
          validate: (nameInput) => {
            if (nameInput) {
              return true;
            } else {
              console.log("Please enter the engineers GitHub username.");
              return false;
            }
          },
        },
      ])

      .then((engineerInput) => {
        const htmlPageContent = renderEngineerHTML(engineerInput);

        fs.writeFile("./dist/index.html", htmlPageContent, (err) =>
          err
            ? console.log(err)
            : console.log("Successfully created engineer profile!")
        );
      });
  };

  // add Intern
  const addIntern = () => {
    inquirer
      .prompt([
        {
          type: "input",
          message: "who is the Intern of the team:",
          name: "name",
          validate: (nameInput) => {
            if (nameInput) {
              return true;
            } else {
              console.log("Please enter the Interns name.");
              return false;
            }
          },
        },

        {
          type: "input",
          message: "Please enter the Intern ID:",
          name: "id",
          validate: (nameInput) => {
            if (nameInput) {
              return true;
            } else {
              console.log("Please enter the Intern ID.");
              return false;
            }
          },
        },
        {
          type: "input",
          message: "Please enter the Interns email:",
          name: "email",
          validate: (nameInput) => {
            if (nameInput) {
              return true;
            } else {
              console.log("Please enter the Interns email.");
              return false;
            }
          },
        },
        {
          type: "input",
          message: "Please enter the Interns school:",
          name: "school",
          validate: (nameInput) => {
            if (nameInput) {
              return true;
            } else {
              console.log("Please enter the Interns school.");
              return false;
            }
          },
        },
      ])

      .then((internInput) => {
        const htmlPageContent = renderInternHTML(internInput);

        fs.writeFile("./dist/index.html", htmlPageContent, (err) =>
          err
            ? console.log(err)
            : console.log("Successfully created Intern profile!")
        );
      });
  };

  // addManager().then(addEngineer).then(addIntern);
  createTeam();
};
runApp();
