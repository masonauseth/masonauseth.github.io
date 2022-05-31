
var count = 0;

function addOne()  {
	count = count + 1;
	document.getElementById("damagedealt").innerHTML = "Damage Dealt = " + count;
	if (count >= 100) {
		document.getElementById("damagedealt").innerHTML = "Dead";	
		}
}
	
document.getElementById("punchy").addEventListener("click", addOne);