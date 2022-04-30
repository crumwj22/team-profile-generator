// importing employee constructor
const Employee = require("./employee");

// extending constructor
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);

    this.officeNumber = officeNumber;
  }

  // returning github
  getOfficeNumber() {
    return this.OfficeNumber;
  }

  getRole() {
    return "manager";
  }
}

module.exports = Manager;
