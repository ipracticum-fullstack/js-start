/*
There are four different ways to create objects in Java Script:

1. Object Literals.
2. Constructor Functions.
3. ECMAScript 6 Classes.
4. Object.create Method.
*/

const fullStackProgrammer = {
  name: "Sagar",
  mobile: "983483472831",
  email: "ss@sagar.com",
  expertise: "Java Script, CSS, react",
};

displayObjectInConsole(fullStackProgrammer);

function createFullStackProgrammer(name, mobile, email, expertise) {
  this.name = name;
  this.mobile = mobile;
  this.email = email;
  this.expertise = expertise;
}

const fullStackProgrammer1 = new createFullStackProgrammer(
  "Arun",
  "74724572472",
  "arun@arun.com",
  "React, Mongo db"
);
const fullStackProgrammer2 = new createFullStackProgrammer(
  "Rahul",
  "764e73647263",
  "rahul@rahul.com",
  "Node.js"
);

displayObjectInConsole(fullStackProgrammer1);
displayObjectInConsole(fullStackProgrammer2);

function displayObjectInConsole(fsProgrammer) {
  console.log("");
  console.log(fsProgrammer.name);
  console.log(fsProgrammer.mobile);
  console.log(fsProgrammer["email"]);
  console.log(fsProgrammer["expertise"]);
  console.log("");
}
