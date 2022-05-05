// importing employee constructor
const Employee = require("./employee");

// extending constructor
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);

    this.officeNumber = officeNumber;
  }

  getOfficeNumber() {
    return this.officeNumber;
  }

  getRole() {
    return "manager";
  }
}

module.exports = Manager;
