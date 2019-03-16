var color1 = document.querySelector(".color1");
var	color2 = document.querySelector(".color2");
var body = document.querySelector("gradient");

 
 function setGradient (){
 	body.style.background = "linear-gradient(to the right, "+ color1.value", "+color2.value
 	+")";

 	css.textContent = body.style.background + ";";
 }
 