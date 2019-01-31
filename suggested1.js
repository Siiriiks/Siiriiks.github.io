// Script Credit: https://stackoverflow.com/a/17632657
(function() {
	var suggested = [
		{
			name: "Aqua Parcs",
			img: "Aqua Parcs/1.jpg",
			location: "V10 Brickhill St, Milton Keynes MK15 9HQ",
			page: "Places/Aqua Parcs",
        },
        {
			name: "Eden Center",
			img: "Eden Center/1.jpg",
			location: "Oxford Rd, High Wycombe HP11 2DQ",
			page: "Places/Eden Center",
        },
		{
			name: "Go Ape",
			img: "Go Ape/3.jpg",
			location: "Go Ape Black Park, Black Park Rd, Slough SL3 6DS",
			page: "Places/Go Ape",
        },
		{
			name: "Rush",
			img: "Rush/1.jpg",
			location: "Lexmark House, Cressex Business Park, Coronation Rd, High Wycombe HP12 3TZ",
			page: "Places/Rush",
        },
		{
			name: "XScape",
			img: "XScape/1.jpg",
			location: "602 Marlborough Gate, Milton Keynes MK9 3XS",
			page: "Places/XScape",
        }
      ];
	var suggested1 = suggested[Math.floor(Math.random() * suggested.length)];
	document.getElementById("suggested1").innerHTML =
		'<div style="width: 250px; height: 175px; background-color: black"/>' +  //Black box behined image to darken it
		'<img src="Assets/' + suggested1.img + '" alt="Place" style="width: 250px; height: 175px; opacity: .8">' +  //Image Shown
		'<h4 class="f-regular" style="position: absolute; top: 0%; left: 8%; color: white">' + suggested1.name + '</h4>' +  //Name of place
		'<div style="padding: 9px">' +  //Open DIV for Information underneath
		'<i class="fas fa-map-marker-alt" id="r-colour"></i> <a>' + suggested1.location + '</a>' +  //Location
		'</div>' +  //Close DIV
		'<a href="' + suggested1.page + '" style="position: absolute; top: 0%; left: 0%; display: block; height: 100%; width: 100%"></a>';  //Make it Clickable
})();