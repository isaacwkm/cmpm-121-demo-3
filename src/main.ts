import "./style.css";

const APP_NAME = "Demo 3 hello";
const app = document.querySelector<HTMLDivElement>("#app")!;

document.title = APP_NAME;

// Creating Game title
const title = document.createElement("h1");
setTitle();

// Append title to the app container
app.appendChild(title);

// Make "clear" button
const button = document.createElement("button");
createButton();

// Add an event listener for the click event
button.addEventListener("click", function () {
  // Code to execute when button is clicked
  alert("you clicked the button!");
});

// Functions below

function setTitle() {
  title.textContent = APP_NAME;
  title.style.textAlign = "center";
  title.style.marginTop = "10px";
}

function createButton() {
  // Declare new button
  button.id = "myButton"; // Set an ID for the button
  button.textContent = "Click me!";

  // Setting the location of the button
  setLocation();

  // Append the button to the body or another existing element
  app.append(button);

  return;

  //// End of function

  function setLocation() {
    button.style.color = "white";
    button.style.marginTop = "0px";
    button.style.marginLeft = "0px";
  }
}
