/*
There are four different ways to create objects in Java Script:

1. Object Literals.
2. Constructor Functions.
3. ECMAScript 6 Classes.
4. Object.create Method.
*/

<<<<<<< HEAD
//1. Object Literals.
const fullStackProgrammer = {
  name: "Sagar",
  mobile: "+91 98 34834 72831",
  email: "ss@sagar.com",
  expertise: "Java Script, CSS, react",
  expYear: 4,
};

//2. Constructor Functions.
=======
const fullStackProgrammer = {
  name: "Sagar",
  mobile: "983483472831",
  email: "ss@sagar.com",
  expertise: "Java Script, CSS, react",
};

displayObjectInConsole(fullStackProgrammer);

>>>>>>> 1fa6d9449da813059a02972543155497eb5451dc
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

<<<<<<< HEAD
//4. Object.create Method.
const fullStackProgrammer3 = Object.create(fullStackProgrammer2);
fullStackProgrammer3.name = "Sujeet";
fullStackProgrammer3.mobile = "987654321";
fullStackProgrammer3.email = "Sujeet@Sujeet.com";

/****************************************************************************************
 ********************Followings are a number of useful display methods ******************
 ****************************************************************************************
 */
=======
displayObjectInConsole(fullStackProgrammer1);
displayObjectInConsole(fullStackProgrammer2);
>>>>>>> 1fa6d9449da813059a02972543155497eb5451dc

function displayObjectInConsole(fsProgrammer) {
  console.log("");
  console.log(fsProgrammer.name);
  console.log(fsProgrammer.mobile);
  console.log(fsProgrammer["email"]);
  console.log(fsProgrammer["expertise"]);
  console.log("");
}
<<<<<<< HEAD

function displayObjectInPage(fsProgrammer) {
  var htmlElement = document.getElementById("root");
  var currentHtml = htmlElement.innerHTML;

  var objHTML =
    "<div class = 'box'>" +
    fsProgrammer.name +
    "</br>" +
    fsProgrammer.mobile +
    "</br>" +
    fsProgrammer.email +
    "</br>" +
    fsProgrammer.expertise +
    "</div>";

  htmlElement.innerHTML = currentHtml + objHTML;
}

function displayObjectInPageUsingLoop(fsProgrammer) {
  var htmlElement = document.getElementById("root");
  var currentHtml = htmlElement.innerHTML;

  var objHTML = "<div class = 'box'>";

  for (const key in fsProgrammer) {
    //objHTML += key + ":" + fsProgrammer[key] + "</br>";
    objHTML += `${key} : ${fsProgrammer[key]} </br>`;
  }

  objHTML += "</div>";

  htmlElement.innerHTML = currentHtml + objHTML;
}

displayObjectInConsole(fullStackProgrammer);
displayObjectInPage(fullStackProgrammer1);
displayObjectInPageUsingLoop(fullStackProgrammer2);
displayObjectInPageUsingLoop(fullStackProgrammer3);
=======
>>>>>>> 1fa6d9449da813059a02972543155497eb5451dc
