//Window
var cWin = Ti.UI.currentWindow;



var aboutLabel = Titanium.UI.createLabel({
	top: 20,
	center: 0,
	text: 'About Converter+',
	font: {fontSize: 22, fontWeight: 'bold'},
	color: '#fff'
});

var aboutInfoLabel = Titanium.UI.createLabel({
	top: 80,
	left: 10,
	right: 10,
	text: '* Converter+ is an app that converts millimeters to centimeters, centimeters to inches, and inches to feet.', 
	font: {fontSize: 14},
	color: '#fff'
});


var aboutAuthorLabel = Titanium.UI.createLabel({
	top: 150,
	left: 10,
	right: 10,
	text: '* Converter+ was built by a student named Josh Ketcham, his picture is below (no he is not in pain, he just has an awkward smile). It was inspired by an app from the Apple iTunes App Store.',
	font: {fontSize: 14},
	color: '#fff'
});

var selfieImage = Titanium.UI.createImageView({
	image:'selfie.jpg',
	top: 240,
	height: 100,
	width: 150,
	center: 0
});


var aboutPeopleLabel = Titanium.UI.createLabel({
	top: 350,
	left: 10,
	right: 10,
	text: '* Josh would also like to acknowledge those who helped him with Converter+. The Course Instructor, Miss Robin Groff Alarcon, who believed in him and his classmates even when they were stressing out about it. The Lab Instructor, Richard Hutchenson (who was awesome!) helped him with his logic to cerate this this app.',
	font: {fontSize: 14},
	color: '#fff'
});

var aboutView = Titanium.UI.createView({
    borderRadius: 5,
    width: 310,
    height: 500,
    left: 5,
    right: 5,
	font: {fontSize: 20},
	backgroundColor: '#333',
});
aboutView.add(aboutLabel, aboutInfoLabel, aboutAuthorLabel, selfieImage, aboutPeopleLabel);

//Main Code
cWin.add(aboutView);