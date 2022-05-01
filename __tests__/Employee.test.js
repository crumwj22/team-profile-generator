const Employee = require("../lib/employee");

it("can we initiate an employee object", () => {
  const employee = new Employee("Jesse", 22, "crumwj22@hotmail.com");

  expect(typeof employee).toBe("object");
});

it("employee name", () => {
  const testName = "Jesse";
  const employee = new Employee(testName, 22, "crumwj22@hotmail.com");

  expect(employee.name).toEqual(testName);
});

it("employee ID", () => {
  const testId = 22;
  const employee = new Employee("Jesse", testId, "crumwj22@hotmail.com");

  expect(employee.id).toEqual(testId);
});

it("employee email", () => {
  const testEmail = "crumwj22@hotmail.com";
  const employee = new Employee("Jesse", 22, testEmail);

  expect(employee.email).toEqual(testEmail);
});

it("employee role", () => {
  const testRole = "employee";
  const employee = new Employee("Jesse", 22, "crumwj22@hotmail.com");

  expect(employee.getRole()).toEqual(testRole);
});
