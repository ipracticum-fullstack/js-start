import { displayObjectInPage, displayObjectInPageTable } from "./Utility.js";

const fullStackProgrammer1 = {
  name: "Sagar",
  mobile: "+91 98 34834 72831",
  email: "ss@sagar.com",
  expertise: "Java Script, CSS, react",
  expYear: 4,
};

const jsonProgrammer = JSON.stringify(fullStackProgrammer1);
console.log(jsonProgrammer);

/*
    {
    "name": "Sagar",
    "mobile": "+91 98 34834 72831",
    "email": "ss@sagar.com",
    "expertise": "Java Script, CSS, react",
    "expYear": 4
    }

*/

const fsProgrammerJson =
  '{"name":"Sujeet","mobile":"+91 98 34834 72831","email":"ss@sagar.com","expertise":"Java Script, CSS, react","expYear":4}';

const fullStackProgrammer2 = JSON.parse(fsProgrammerJson);

console.log(fullStackProgrammer2);

displayObjectInPage(fullStackProgrammer2);
displayObjectInPageTable(fullStackProgrammer2);
