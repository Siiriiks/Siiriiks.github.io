// JavaScript Document
function random_colour() { //Colours from https://www.w3schools.com/colors/colors_crayola.asp
	var color = '#';
	var letters = ['FF681F', //Red-Orange
				   'FFDB00', //Sizzling Sunrise
				   '4F69C6', //Indigo
				   '84DE02', //Alien Armpit
				   '8F47B3', //Medium Violet
				   '66FF66', //Screamin' Green
				   'FF9933', //Neon Carrot
				   'E30B5C', //Razzmatazz
				   'A50B5E', //Jazzberry Jam
				   'E667CE', //Brilliant Rose
				   '3F26BF', //Ultramarine Blue
				   '0066CC', //Navy Blue
				   '00CCCC', //Robin's Egg Blue
				   'FD0E35', //Scarlet
				   'FF00CC', //Hot Magenta
				   '5DADEC', //Blue Jeans
				   '00CC99', //Caribbean Green
				  ];
	color += letters[Math.floor(Math.random() * letters.length)];
	document.getElementById('r-colour-b').style.background = color;
	document.getElementById('r-colour1-b').style.background = color;
	document.getElementById('r-colour').style.color = color;
	document.getElementById('r-colour1').style.color = color;
	document.getElementById('r-colour2').style.color = color;
	document.getElementById('r-colour3').style.color = color;
	document.getElementById('r-colour4').style.color = color;
            }