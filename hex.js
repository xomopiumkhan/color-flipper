const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "c", "D", "E" ,"F"];
const btn = document.querySelector("#btn");
const colorBox = document.querySelector(".color");

btn.addEventListener("click", function() {

let hexcolor = "#";
for (i = 0; i < 6; i++) {
	hexcolor += numbers[getRandomColor()]
}

colorBox.innerHTML = hexcolor;
document.body.style.backgroundColor = hexcolor;
}

)

function getRandomColor() {
return Math.floor(Math.random() * numbers.length);
}
