const Manager = require("../lib/manager");

test("can we initiate an manager object", () => {
  const manager = new Manager("Jesse", 22, "crumwj22@hotmail.com", "1234");

  expect(typeof manager).toBe("object");
});

test("can we initiate an manager name", () => {
  const testName = "Jesse";
  const manager = new Manager(testName, 22, "crumwj22@hotmail.com", "1234");

  expect(manager.name).toEqual(testName);
});

test("can we initiate an manager ID", () => {
  const testId = 22;
  const manager = new Manager("Jesse", testId, "crumwj22@hotmail.com", "1234");

  expect(manager.id).toEqual(testId);
});

test("can we initiate an manager email", () => {
  const testEmail = "crumwj22@hotmail.com";
  const manager = new Manager("Jesse", 22, testEmail);

  expect(manager.email).toEqual(testEmail);
});

test("can we initiate an manager office number", () => {
  const testOfficeNumber = "1234";
  const manager = new Manager(
    "Jesse",
    22,
    "crumwj22@hotmail.com",
    testOfficeNumber
  );

  expect(manager.officeNumber).toEqual(testOfficeNumber);
});

test("can we initiate an manager role", () => {
  const testRole = "manager";
  const manager = new Manager("Jesse", 22, "crumwj22@hotmail.com", "1234");

  expect(manager.getRole()).toEqual(testRole);
});
