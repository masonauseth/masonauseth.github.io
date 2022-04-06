var count = 0;

function subOne()  {
	count = count - 1;
	document.getElementById("total").innerHTML = count;
	if (count == 68) {
		document.getElementById("total").innerHTML = "NICE!";
	}
	
}

function addOne()  {
	count = count + 1;
	document.getElementById("total").innerHTML = count;
	if (count == 68) {
		document.getElementById("total").innerHTML = "NICE!";
	}
}
	
	
	


document.getElementById("minus").addEventListener("click", subOne);
document.getElementById("plus").addEventListener("click", addOne);