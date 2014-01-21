//Landing Page

var lWindow= Ti.UI.createWindow({
	title: "Landing Page",
	backgroundImage: "marvelBackground.jpg"
});


var imageView= Ti.UI.createImageView({
	image: "marvelreel.jpg",
	opacity: .8,
	top: 120
});


var enterView = Ti.UI.createView({
	backgroundColor: "#FF1919",
	borderRadius: 10,
	height:50,
	bottom: 120,
	file: "mainMenu.js"
});

var enterLabel = Ti.UI.createLabel({
	text: "Enter",
	font: {fontSize: 24, fontFamily: "Helvetica", fontWeight: "bold"},
	color: "#fff",
	center: 0
});
enterView.add(enterLabel);


enterView.addEventListener("click", function(){
	var mWindow = Ti.UI.createWindow({
		title: 'Main Menu',
		url: 'mainMenu.js'
	});
	mWindow.open(mWindow, {animate:true});
});



//Main Code
lWindow.add(enterView);
lWindow.add(imageView);
lWindow.open();