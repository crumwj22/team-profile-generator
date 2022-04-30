// importing employee constructor
const Employee = require("./employee");

// extending constructor
class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);

    this.school = school;
  }

  // returning github
  getSchool() {
    return this.school;
  }

  getRole() {
    return "intern";
  }
}

module.exports = Intern;
