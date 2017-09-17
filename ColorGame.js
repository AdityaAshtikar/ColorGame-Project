var squareNumber = 6;

var colors = generateRandomColors(squareNumber);

var squares = document.querySelectorAll(".square");
var colorToFind = pickColor();

var displayColor = document.getElementById('displayColor');
var message = document.getElementById('message');

var h1 = document.querySelector('h1');

var reset = document.getElementById('reset');

var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");


easy.addEventListener("click", function(){
	hard.classList.remove("selected");
	easy.classList.add("selected");

	squareNumber = 3;
	
	colors = generateRandomColors(squareNumber);
	colorToFind = pickColor();
	displayColor.textContent = colorToFind;

	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
		}
		else
			squares[i].style.display = "none";
	}
});

hard.addEventListener("click", function(){
	easy.classList.remove("selected");
	hard.classList.add("selected");

	squareNumber = 6;

	colors = generateRandomColors(squareNumber);
	colorToFind = pickColor();
	displayColor.textContent = colorToFind;

	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
	}
});


//reset will generate random new colors, pick a new colorToFind and change colors of the squares

reset.addEventListener("click", function(){

	h1.style.backgroundColor = "steelblue";
	reset.textContent = "New Colors?";
	message.textContent = "";

	colors = generateRandomColors(squareNumber);

	colors = generateRandomColors(squareNumber);

	colorToFind = pickColor();

	displayColor.textContent = colorToFind;

	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
	}
});

displayColor.textContent = colorToFind;

for(var i=0; i<squares.length; i++){
	//adding initial colors to squares
	squares[i].style.backgroundColor = colors[i];

	//adding click listeners to check for matching color
	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.backgroundColor;

		if(clickedColor === colorToFind){
			message.textContent = "Correct :)";
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
			reset.textContent = "Play Again?";
		}
		else{
			this.style.backgroundColor = "#232323";
			message.textContent = "Wrong! Try Again";
		}

	});
}

//to change all colors of squares

function changeColors(color) {
	for(var i=0; i<squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

//random colors for picking

function pickColor() {
	var randomColor = Math.floor(Math.random() * colors.length);
	return colors[randomColor];
}

//random colors for the array, not for picking

function generateRandomColors(number) {
	var colorArray = [];

	for(var i = 0; i < number; i++){
		colorArray.push(generateColor());
	}
	return colorArray;
}

function generateColor() {
	//to generate for red 0 - 255
	var r = Math.floor(Math.random() * 256);
	//to generate for green 0 - 255
	var g = Math.floor(Math.random() * 256);
	//to generate for blue 0 - 255
	var b = Math.floor(Math.random() * 256);

	//returning in rgb() format
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
