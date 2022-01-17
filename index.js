
const color = ["#fcb900", "#ff0000", "#0400ff", "#00ff1a"];
const colorBox = document.querySelector(".color");

btn.addEventListener("click", function () {

	var randomNumber = Math.floor(Math.random() * 4);
	console.log(randomNumber);

	document.body.style.backgroundColor = color[randomNumber];
	colorBox.innerHTML = color[randomNumber];
	

});