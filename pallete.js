const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const col1 = document.querySelector(".col1");
const col2 = document.querySelector(".col2");
const col3 = document.querySelector(".col3");
const col4 = document.querySelector(".col4");
const col5 = document.querySelector(".col5");
const p1 = document.querySelector(".p1");
const p2 = document.querySelector(".p2");
const p3 = document.querySelector(".p3");
const p4 = document.querySelector(".p4");
const p5 = document.querySelector(".p5");
const btn = document.querySelector(".btn");

btn.addEventListener("click", function(){

	var hexcolor1 = "#";
	var hexcolor2 = "#";
	var hexcolor3 = "#";
	var hexcolor4 = "#";
	var hexcolor5 = "#";

	for (i=0; i<6; i++) {
		hexcolor1 += colors[randomNumbers1()];
		hexcolor2 += colors[randomNumbers1()];
		hexcolor3 += colors[randomNumbers1()];
		hexcolor4 += colors[randomNumbers1()];
		hexcolor5 += colors[randomNumbers1()];
	}

col1.style.backgroundColor = hexcolor1;
col2.style.backgroundColor = hexcolor2;
col3.style.backgroundColor = hexcolor3;
col4.style.backgroundColor = hexcolor4;
col5.style.backgroundColor = hexcolor5;
p1.textContent = hexcolor1;
p2.textContent = hexcolor2;
p3.textContent = hexcolor3;
p4.textContent = hexcolor4;
p5.textContent = hexcolor5;



})

function randomNumbers1() {
	return Math.floor(Math.random() * colors.length);
}