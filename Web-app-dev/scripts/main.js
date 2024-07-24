
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/finger.jpeg") {
    myImage.setAtstribute("src", "images/project.jpeg");
  } else {
    myImage.setAttribute("src", "images/cryinggif.gif");
  }
};

function setUserName() {
  const myName = prompt("Please enter your name.");
  if ( myName == "Nope") {
    alert(myName + " This is bad.");
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
  }
}


if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

myButton.onclick = () => {
  setUserName();
};

