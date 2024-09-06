let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/programming-pictures.jpg") {
    myImage.setAttribute("src", "images/programming-pictures2.jpg");
  } else {
    myImage.setAttribute("src", "images/programming-pictures.jpg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    let myName = prompt("请输入你的名字。");
    localStorage.setItem("name", myName);
    myHeading.textContent = "Welcome to my website!" + myName;
  }
  
  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "Welcome to my website!" + storedName;
  }
  
  myButton.onclick = function () {
    setUserName();
  };
  
  
  
  
  
  
