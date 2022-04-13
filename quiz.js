var q1 = document.getElementById("q1");
var q2 = document.getElementById("q2");
var q3 = document.getElementById("q3");
var q4 = document.getElementById("q4");
var q5 = document.getElementById("q5");
var q6 = document.getElementById("q6");
var q7 = document.getElementById("q7");
var q8 = document.getElementById("q8");
var q9 = document.getElementById("q9");
var q10 = document.getElementById("q10");
var submit = document.getElementById("submit");
var score = document.getElementById("score");
var password = document.getElementById("password");
var result = 0;

function calculate() {
	result = 0

if(q1.value == "Onyx"){
	result = result + 1;
}
if(q2.value == "Osowski"){
	result = result + 1;
}
if(q3.value == "An Aspen Tree forest"){
	result = result + 1;
}
if(q4.value == "Mason"){
	result = result + 1;
}
if(q5.value == "Beginnings"){
	result = result + 1;
}
if(q6.value == "CADD then Marketing"){
	result = result + 1;
}
if(q7.value == "Hollow Knight"){
	result = result + 1;
}
if(q8.value == "536"){
	result = result + 1;
}
if(q9.value == "Apple"){
	result = result + 1;
}
if(q10.value == "Suspicious"){
	result = result + 1;
}	
	
score.innerHTML = result;
	
if(result == 10){
	password.innerHTML = "SHHH, the secret password is snickerdoodle"
}
	
}	

submit.addEventListener("click",calculate);
	

	
	













