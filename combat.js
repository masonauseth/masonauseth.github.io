
var count = 0;
var count2 = 0;
var count3 = 0;

function addOne()  {
	count = count + 1;
	document.getElementById("damagedealt").innerHTML = "Damage Dealt = " + count;
	if (count >= 100) {
		document.getElementById("damagedealt").innerHTML = "Dead";	
		}
}
	
document.getElementById("punchy").addEventListener("click", addOne);


function addOne2()  {
	count2 = count2 + 1;
	document.getElementById("damagedealt2").innerHTML = "Damage Dealt = " + count2;
	if (count2 >= 200) {
		document.getElementById("damagedealt2").innerHTML = "Dead";	
		}
}
	
document.getElementById("punchy2").addEventListener("click", addOne2);


function addOne3()  {
	count3 = count3 + 1;
	document.getElementById("damagedealt3").innerHTML = "Damage Dealt = " + count3;
	if (count3 >= 300) {
		document.getElementById("damagedealt3").innerHTML = "Dead";	
		}
}
	
document.getElementById("punchy3").addEventListener("click", addOne3);