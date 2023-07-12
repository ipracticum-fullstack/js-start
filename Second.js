function showAlert() {
  alert("Show this Alert");
}

function printOnConsole() {
  console.log("This is my first log message");
}

function showText() {
  var htmlElement = document.getElementById("root");
  alert(htmlElement);
  htmlElement.innerHTML =
    "<p>Hello Sagar!</p><p>This is my Second js experiemnt</p>";
}

function add(num1, num2) {
  console.log(num1 + num2);
}

add(10, 3);

//showAlert();
showText();
//printOnConsole();
//add(99, 33);
