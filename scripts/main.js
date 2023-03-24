const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/cat.png") {
    myImage.setAttribute("src", "images/lidia.jpg");
  } else {
    myImage.setAttribute("src", "images/cat.png");
  }
};
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  localStorage.setItem("name", myName);
  myHeading.textContent = `Logged in as, ${myName}`;
}
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Logged in as, ${storedName}`;
}
myButton.onclick = () => {
  setUserName();
};