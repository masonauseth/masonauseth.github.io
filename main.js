function strawberry() {
	document.getElementById("hello").innerHTML = "Strawberry";
}

document.getElementById("myButton").addEventListener("click", strawberry);



function watermellon() {
	document.getElementById("hello").innerHTML = "Watermellon";
}

document.getElementById("myButton1").addEventListener("click", watermellon);



function Pineapple() {
	document.getElementById("hello").innerHTML = "Pineapple";
}

document.getElementById("myButton2").addEventListener("click", Pineapple);



function JFK() {
	document.getElementById("hello").innerHTML = "JFK";
}

document.getElementById("myButton3").addEventListener("click", JFK);



function Cucumber() {
	document.getElementById("hello").innerHTML = "Cucumber";
}

document.getElementById("myButton4").addEventListener("click", Cucumber);


function changeRed() {
	document.getElementById("hello").style.backgroundColor = "red";
	document.getElementById("hello").innerHTML = "RED";
}

document.getElementById("myButtonred").addEventListener("click", changeRed);


function changeBlue() {
	document.getElementById("hello").style.backgroundColor = "blue";
	document.getElementById("hello").innerHTML = "BLUE";
}

document.getElementById("myButtonred").addEventListener("click", changeBlue);