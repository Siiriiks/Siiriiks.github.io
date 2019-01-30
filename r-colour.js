// JavaScript Document
function random_colour() {
	var color = '#';
	var letters = ['ff598f','fd8a5e','e0e300','01dddd'];
	color += letters[Math.floor(Math.random() * letters.length)];
	document.getElementById('r-colour-b').style.background = color;
	document.getElementById('r-colour1-b').style.background = color;
	document.getElementById('r-colour').style.color = color;
	document.getElementById('r-colour1').style.color = color;
	document.getElementById('r-colour2').style.color = color;
	document.getElementById('r-colour3').style.color = color;
	document.getElementById('r-colour4').style.color = color;
            }