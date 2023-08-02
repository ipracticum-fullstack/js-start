
export function displayObjectInPage(fsProgrammer) {
  var htmlElement = document.getElementById("root");
  var currentHtml = htmlElement.innerHTML;

  var objHTML = "<div class = 'box'>";

  for (const key in fsProgrammer) {
    objHTML += `${key} : ${fsProgrammer[key]} </br>`;
  }

  objHTML += "</div>";

  htmlElement.innerHTML = currentHtml + objHTML;
}


export function displayObjectInPageTable(fsProgrammer) {
  var htmlElement = document.getElementById("root");
  var currentHtml = htmlElement.innerHTML;

  var objHTML = "<div class = 'box'> <table >";

  for (const key in fsProgrammer) {
    objHTML += "<tr><td>";

    objHTML = objHTML + key;
    objHTML += "</td><td>";
    objHTML += fsProgrammer[key];

    objHTML += "</td></tr>";
  }

  objHTML += "</table></div>";

  console.log(objHTML);

  htmlElement.innerHTML = currentHtml + objHTML;
}
