const Intern = require("../lib/intern");

test("can we initiate an intern object", () => {
  const intern = new Intern("Jesse", 22, "crumwj22@hotmail.com", "school");

  expect(typeof intern).toBe("object");
});

test("can we initiate an intern name", () => {
  const testName = "Jesse";
  const intern = new Intern(testName, 22, "crumwj22@hotmail.com", "school");

  expect(intern.name).toEqual(testName);
});

test("can we initiate an intern ID", () => {
  const testId = 22;
  const intern = new Intern("Jesse", testId, "crumwj22@hotmail.com", "school");

  expect(intern.id).toEqual(testId);
});

test("can we initiate an intern email", () => {
  const testEmail = "crumwj22@hotmail.com";
  const intern = new Intern("Jesse", 22, testEmail);

  expect(intern.email).toEqual(testEmail);
});

test("can we initiate an intern school", () => {
  const testSchool = "school";
  const intern = new Intern("Jesse", 22, "crumwj22@hotmail.com", "school");

  expect(intern.getSchool()).toEqual(testSchool);
});

test("can we initiate an intern role", () => {
  const testRole = "intern";
  const intern = new Intern("Jesse", 22, "crumwj22@hotmail.com", "school");

  expect(intern.getRole()).toEqual(testRole);
});
