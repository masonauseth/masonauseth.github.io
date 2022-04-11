function password () {
	if(document.getElementById("password").value == "snickerdoodle"){
		document.getElementById("password").style.backgroundColor = "Green"
		document.getElementById("check").innerHTML = "Access Granted"
	}
	else if(document.getElementById("password").value != "snickerdoodle"){
		document.getElementById("password").style.backgroundColor = "Red"
		document.getElementById("check").innerHTML = "Access Denied"
	}
}







document.getElementById("Enter").addEventListener("click", password);