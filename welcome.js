//Script Credit: https://stackoverflow.com/a/17632657
(function() {
	var quotes = [
        {
			big: "Bonjour",
			text: "Ça va?",
			img: "",
        },
        {
			big: "Hola",
			text: "como estas?",
			img: "",
        },
		{
			big: "Hello",
			text: "how are you?",
			img: "",
        },
		{
			big: "Hallo",
			text: "ist das ok?",
			img: "",
        },
		{
			big: "Hej",
			text: "är det ok?",
			img: "",
        }
      ];
	var quote = quotes[Math.floor(Math.random() * quotes.length)];
	document.getElementById("welcome").innerHTML =
		'<h1 class="f-bold">' + quote.big + '</h1>' +
		'<h3>' + quote.text + '</h3>';
})();