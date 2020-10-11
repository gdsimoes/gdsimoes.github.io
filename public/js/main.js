let myImage = document.querySelector("img");

myImage.onclick = function () {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "public/img/IMG_7682.JPG") {
        myImage.setAttribute("src", "https://github.com/gdsimoes.png");
    } else {
        myImage.setAttribute("src", "public/img/IMG_7682.JPG");
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    let myName;
    while (!(myName = prompt("Please enter your name."))) {}
    localStorage.setItem("name", myName);
    myHeading.textContent = "Mozilla is cool, " + myName;
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "Mozilla is cool, " + storedName;
}

myButton.onclick = function () {
    setUserName();
};
