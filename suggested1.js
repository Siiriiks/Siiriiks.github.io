// Script Credit: https://stackoverflow.com/a/17632657
(function() {
	var suggested = [
		{
			name: "Aqua Parcs",
			img: "Aqua Parcs/1.jpg",
			location: "V10 Brickhill St, Milton Keynes MK15 9HQ",
			page: "Places/Aqua Parcs",
			info: "Set in the heart of one of the most popular and stunning country parks in Milton Keynes, we offer the latest must-have experience to Willen Lake. Aqua Parcs is open to all aged 8 years and above for a day of jumping, bouncing and playing on our floating, inflatable obstacle course.",
        },
        {
			name: "Wendover Woods",
			img: "Wendover Woods/1.jpg",
			location: "Upper Icknield Way, Aston Clinton, Aylesbury",
			page: "Places/Wendover Woods",
			info: "Enjoy spectacular views and wild landscape across Aylesbury Vale. Our Buckinghamshire adventure is the only Go Ape site in the UK to exclusively offer an ‘Extreme’ route (optional). It includes a Scrambling Net and Climbing Wall to reach our most adventurous crossings. Are you up for the challenge?",
        },
		{
			name: "Go Ape",
			img: "Black Park/Go Ape/3.jpg",
			location: "Go Ape Black Park, Black Park Rd, Slough SL3 6DS",
			page: "Places/Go Ape",
			info: "Adjacent to Pinewood Film Studios, home of the James Bond and Star Wars sequels, Black Park Country Park is one of Buckinghamshire's hidden gems. Our leafy hangout, built in 2010, is set in 530 acres of stunning woodland with a beautiful lake at its heart. With Uxbridge just down the road, our adventures are in good company for those wishing to explore the area and spend the whole day out.",
        },
		{
			name: "Rush",
			img: "Rush/1.jpg",
			location: "Lexmark House, Cressex Business Park, Coronation Rd, High Wycombe HP12 3TZ",
			page: "Places/Rush",
			info: "Rush High Wycombe is an adrenaline-fuelled indoor trampoline park for bouncers of all ages. With our huge spring-loaded indoor playground, and range of exciting activities we can help get your blood pumping and heart racing. Whether you’re a first time trampoliner or an experienced bouncer, a toddler, a teen or anything in between, we're a busy mainstream leisure centre offering kids parties, special needs sessions, events and more. Customers are required to watch our short safety video before bouncing and all jumpers must fill in a waiver prior to bouncing (you can do this online via our website in advance). Pre-booking is recommended, walk-in charges apply.",
        },
		{
			name: "XScape",
			img: "XScape/1.jpg",
			location: "602 Marlborough Gate, Milton Keynes MK9 3XS",
			page: "Places/XScape",
			info: "This sports and entertainment complex features indoor snow slopes, climbing walls, bowling lanes, a multi-screen cinema and a variety of interactive games.",
        }
      ];
	var suggested1 = suggested[Math.floor(Math.random() * suggested.length)];
	document.getElementById("suggested1").innerHTML =
		'<div style="width: 250px; height: 175px; background-color: black"/>' +  //Black box behined image to darken it
		'<img src="Assets/' + suggested1.img + '" alt="Place" style="width: 250px; height: 175px; opacity: .8">' +  //Image Shown
		'<h4 class="f-regular" style="position: absolute; top: 0%; left: 8%; color: white">' + suggested1.name + '</h4>' +  //Name of place
		'<div style="padding: 9px">' +  //Open DIV for Information underneath
		'<div style="overflow: hidden; height: 160px; position: relative">\ ' +
		'<p class="f-regular">' + suggested1.info + '</p>' +
		'<div class="fadeout"></div>' +
		'</div>' +
		'<i class="fas fa-map-marker-alt" id="r-colour"></i> <a>' + suggested1.location + '</a>' +  //Location
		'</div>' +  //Close DIV
		'<a href="' + suggested1.page + '" style="position: absolute; top: 0%; left: 0%; display: block; height: 100%; width: 100%"></a>';  //Make it Clickable
})();