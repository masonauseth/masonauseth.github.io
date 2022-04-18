
var enteredpass;

function password () {
	enteredpass = document.getElementById("password").value
	if(enteredpass == "snickerdoodle"){
		document.getElementById("password").style.backgroundColor = "Green"
		document.getElementById("check").innerHTML = "Access Granted"
	}
	else if(enteredpass != "snickerdoodle"){
		document.getElementById("password").style.backgroundColor = "Red"
		document.getElementById("check").innerHTML = "The Password " + 
		enteredpass + " Was Incorrect"  
	}
}







document.getElementById("Enter").addEventListener("click", password);