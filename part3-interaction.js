//In part3-interaction.js, complete these functions:

function sayHello() {
 let greetingElement = document.getElementById("message");
  greetingElement.innerHTML = "Welcome!";
} 


function showName() {
    let nameElement = document.getElementById("nameInput");
    let outputElement = document.getElementById("output");
    let fullName = nameElement.value;
    outputElement.innerHTML = `Hello, ${fullName}!`;
  }