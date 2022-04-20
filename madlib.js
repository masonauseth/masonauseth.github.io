var name1;
var noun1;
var adjective1;
var adverb;
var color;
var noun2;
var noun3;
var adjective2;
var vehicle;
var noun4;
function madlib() {
name1 = document.getElementById("name1").value;
noun1 = document.getElementById("noun1").value;
adjective1 = document.getElementById("adjective1").value;
adverb = document.getElementById("adverb").value;
color = document.getElementById("color").value;
noun2 = document.getElementById("noun2").value;
noun3 = document.getElementById("noun3").value;
adjective2 = document.getElementById("adjective2").value;
vehicle = document.getElementById("vehicle").value;
noun4 = document.getElementById("noun4").value;
	
document.getElementById("madlibstory").innerHTML = "Once ther was a guy named " + name1 + ". He lived in a " + noun1 + " and he loved it. Every day he would " + adjective1 + " run the store and buy lots of apples " + adverb + ". He then would would go back to his " + color + " car and drive away. He would drive to a " + noun2 + " and get out his " + noun3 + ". He then " + adjective2 + " hops in a " + vehicle + "and leaves. Some people may say this is weird but it makes perfect sence to him and his" + noun4 + ".";
}

document.getElementById("madbutt").addEventListener("click", madlib)


