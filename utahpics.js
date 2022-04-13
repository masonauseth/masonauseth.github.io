var b1 = document.getElementById("arch");
var b2 = document.getElementById("canyon");
var image = document.getElementById("utahpic")

function changearch() {
	image.src = "Images/IMG_4448.jpg";
}

function changecanyon() {
	image.src = "Images/IMG_4014.jpg";
}

b1.addEventListener("click", changearch)
b2.addEventListener("click", changecanyon)
b3.addEventListener("click", changecanyon)
b4.addEventListener("click", changecanyon)
b5.addEventListener("click", changecanyon)
b6.addEventListener("click", changecanyon)
b7.addEventListener("click", changecanyon)
b8.addEventListener("click", changecanyon)
b9.addEventListener("click", changecanyon)
b10.addEventListener("click", changecanyon)