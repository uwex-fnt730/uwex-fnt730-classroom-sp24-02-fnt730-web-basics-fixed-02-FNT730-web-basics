/*
 * This is where you will write your Javascript code following the assignment.
 * Author: ***Erik Johnson***
 * Date: ***05/07/2025***
 */
// Store a reference to the <h1> in a variable
const myHeading = document.querySelector("h1");
// Update the text content of the <h1>
myHeading.textContent = "Hello world!";

const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/UWMascot.png") {
    myImage.setAttribute("src", "images/UWMascot2.png");
  } else {
    myImage.setAttribute("src", "images/UWMascot.png");
  }

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
});

function setUserName() {
    const myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    myHeading.textContent = `FNT730 is cool, ${myName}`;
  }

  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `FNT730 is cool, ${storedName}`;
  }

  myButton.addEventListener("click", () => {
    setUserName();
});