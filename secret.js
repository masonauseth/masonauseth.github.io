function password () {
	if(document.getElementById("password").value == "snickerdoodle"){
		document.getElementById("password").style.backgroundColor = "Green"
		document.getElementById("password").value = "Access Granted"
	}
	else if(document.getElementById("password").value != "snickerdoodle"){
		document.getElementById("password").style.backgroundColor = "Red"
		document.getElementById("password").value = "Access Denied"
	}
}







document.getElementById("Enter").addEventListener("click", password);