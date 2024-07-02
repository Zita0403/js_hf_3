// Első div
let firstDiv = document.createElement("div");
firstDiv.className = "red-dot";
console.log(firstDiv);
document.body.children[1].children[0].appendChild(firstDiv);


let redDot = document.querySelector(".red-dot");
console.dir(redDot);

redDot.onclick = function(){
    redDot.classList.add("double");
}

//Második div
let secondDiv = document.createElement("div");
secondDiv.className = "green-dot";
console.log(secondDiv);
document.body.children[1].children[1].appendChild(secondDiv);

let greenDot = document.querySelector(".green-dot");

greenDot.onclick = function(){
    greenDot.classList.add("double", "delay");
}

//Harmadik div
let thirdDiv = document.createElement("div");
thirdDiv.className = "blue-square";
console.log(thirdDiv);
document.body.children[1].children[2].appendChild(thirdDiv);

let blueSquare = document.querySelector(".blue-square");

blueSquare.onclick = function() {
    blueSquare.classList.add("slide");
}

//Ötödik feladat
let fourtDiv1 = document.createElement("div");
fourtDiv1.className = "yellow-square";
console.log(fourtDiv1);
document.body.children[1].children[3].appendChild(fourtDiv1);

let fourtDiv2 = document.createElement("div");
fourtDiv2.className = "yellow-square";
console.log(fourtDiv2);
document.body.children[1].children[3].appendChild(fourtDiv2);

fourtDiv1.onclick = function(){
    fourtDiv2.classList.toggle("hidden");
}