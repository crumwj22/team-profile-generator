const Engineer = require("../lib/engineer");

test("can we initiate an engineer object", () => {
  const engineer = new Engineer(
    "Jesse",
    22,
    "crumwj22@hotmail.com",
    "crumwj22"
  );

  expect(typeof engineer).toBe("object");
});

test("can we initiate an engineer name", () => {
  const testName = "Jesse";
  const engineer = new Engineer(
    testName,
    22,
    "crumwj22@hotmail.com",
    "crumwj22"
  );

  expect(engineer.name).toEqual(testName);
});

test("can we initiate an engineer ID", () => {
  const testId = 22;
  const engineer = new Engineer(
    "Jesse",
    testId,
    "crumwj22@hotmail.com",
    "crumwj22"
  );

  expect(engineer.id).toEqual(testId);
});

test("can we initiate an engineer email", () => {
  const testEmail = "crumwj22@hotmail.com";
  const engineer = new Engineer("Jesse", 22, testEmail);

  expect(engineer.email).toEqual(testEmail);
});

test("can we initiate an engineer github", () => {
  const testGithub = "crumwj22";
  const engineer = new Engineer(
    "Jesse",
    22,
    "crumwj22@hotmail.com",
    "crumwj22"
  );

  expect(engineer.getGithub()).toEqual(testGithub);
});

test("can we initiate an engineer role", () => {
  const testRole = "engineer";
  const engineer = new Engineer("Jesse", 22, "crumwj22@hotmail.com");

  expect(engineer.getRole()).toEqual(testRole);
});
