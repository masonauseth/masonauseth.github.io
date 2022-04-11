var q1 = document.getElementById("q1");
var q1result = document.getElementById("q1result");


function quiz() {
	if(q1.value == "Onyx")
	{
		(q1result).innerHTML = "correct";
	}
	
	else {
		(q1result).innerHTML = "wrong";
	}
}

document.getElementById("s1").addEventListener("click", quiz);
