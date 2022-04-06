var count = 0;

function subOne()  {
	count = count - 1;
	document.getElementById("total").innerHTML = count;
}

function addOne()  {
	count = count + 1;
	document.getElementById("total").innerHTML = count;
}

document.getElementById("minus").addEventListener("click", subOne);
document.getElementById("plus").addEventListener("click", addOne);
