//Script Credit: https://stackoverflow.com/a/17632657
(function() {
	var quotes = [
        {
			text: "Welcome Message 1",
			img: "",
        },
        {
			text: "Welcome Message 2",
			img: "",
        },
		{
			text: "Welcome Message 3",
			img: "",
        },
		{
			text: "Welcome Message 4",
			img: "",
        },
		{
			text: "Welcome Message 5",
			img: "",
        }
      ];
	var quote = quotes[Math.floor(Math.random() * quotes.length)];
	document.getElementById("quote").innerHTML =
		'<h3>' + quote.text + '</h3>';
})();