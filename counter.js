var count = 0;



function Divide2()  {
	count = count / 2;
	document.getElementById("total").innerHTML = count;
	if (count == 69) {
		document.getElementById("total").innerHTML = "NICE!";
	}
}


function subFive()  {
	count = count - 5;
	document.getElementById("total").innerHTML = count;
	if (count == 69) {
		document.getElementById("total").innerHTML = "NICE!";
	}
}


function subOne()  {
	count = count - 1;
	document.getElementById("total").innerHTML = count;
	if (count == 69) {
		document.getElementById("total").innerHTML = "NICE!";
	}
	
}

function addOne()  {
	count = count + 1;
	document.getElementById("total").innerHTML = count;
	if (count == 69) {
		document.getElementById("total").innerHTML = "NICE!";
	}
}
	


function addFive()  {
	count = count + 5;
	document.getElementById("total").innerHTML = count;
	if (count == 69) {
		document.getElementById("total").innerHTML = "NICE!";
	}
}

function multiply2()  {
	count = count * 2;
	document.getElementById("total").innerHTML = count;
	if (count == 69) {
		document.getElementById("total").innerHTML = "NICE!";
	}
}

function Reset()  {
	count = count = 0;
	document.getElementById("total").innerHTML = count;
	if (count == 69) {
		document.getElementById("total").innerHTML = "NICE!";
	}
}
	
	


document.getElementById("minus").addEventListener("click", subOne);
document.getElementById("plus").addEventListener("click", addOne);
document.getElementById("plus5").addEventListener("click", addFive);
document.getElementById("minus5").addEventListener("click", subFive);
document.getElementById("divideBy2").addEventListener("click", Divide2);
document.getElementById("multiplyBy2").addEventListener("click", multiply2);
document.getElementById("reset").addEventListener("click", Reset);





