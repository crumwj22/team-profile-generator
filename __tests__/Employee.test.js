const Employee = require("../lib/employee");

test("can we initiate an employee object", () => {
  const employee = new Employee("Jesse", 22, "crumwj22@hotmail.com");

  expect(typeof employee).toBe("object");
});

test("can we initiate an employee name", () => {
  const testName = "Jesse";
  const employee = new Employee(testName, 22, "crumwj22@hotmail.com");

  expect(employee.name).toEqual(testName);
});

test("can we initiate an employee ID", () => {
  const testId = 22;
  const employee = new Employee("Jesse", testId, "crumwj22@hotmail.com");

  expect(employee.id).toEqual(testId);
});

test("can we initiate an employee email", () => {
  const testEmail = "crumwj22@hotmail.com";
  const employee = new Employee("Jesse", 22, testEmail);

  expect(employee.email).toEqual(testEmail);
});

test("can we initiate an employee role", () => {
  const testRole = "employee";
  const employee = new Employee("Jesse", 22, "crumwj22@hotmail.com");

  expect(employee.getRole()).toEqual(testRole);
});
