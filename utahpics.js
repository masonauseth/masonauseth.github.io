var b1 = document.getElementById("arch");
var b2 = document.getElementById("canyon");
var b3 = document.getElementById("hill");
var b4 = document.getElementById("rock");
var b5 = document.getElementById("delacatearch");
var b6 = document.getElementById("walls");
var b7 = document.getElementById("hole");
var b8 = document.getElementById("smallarch");
var b9 = document.getElementById("tree");
var b10 = document.getElementById("twoarch");
var image = document.getElementById("utahpic")

function changearch() {
	image.src = "Images/IMG_4448.jpg";
}

function changecanyon() {
	image.src = "Images/IMG_4014.jpg";
}

function changehill() {
	image.src = "Images/hill.jpg";
}

function changerock() {
	image.src = "Images/IMG_4085.jpg";
}

function changedelacatearch() {
	image.src = "Images/IMG_4181.jpg";
}

function changewalls() {
	image.src = "Images/IMG_4297.jpg";
}

function changehole() {
	image.src = "Images/IMG_4318.jpg";
}

function changesmallarch() {
	image.src = "Images/IMG_4339.jpg";
}

function changetree() {
	image.src = "Images/IMG_4369.jpg";
}

function changetwoarch() {
	image.src = "Images/IMG_4373.jpg";
}

b1.addEventListener("click", changearch)
b2.addEventListener("click", changecanyon)
b3.addEventListener("click", changehill)
b4.addEventListener("click", changerock)
b5.addEventListener("click", changedelacatearch)
b6.addEventListener("click", changewalls)
b7.addEventListener("click", changehole)
b8.addEventListener("click", changesmallarch)
b9.addEventListener("click", changetree)
b10.addEventListener("click", changetwoarch)