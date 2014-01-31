//Window
var cWin = Ti.UI.currentWindow;



var instructionLabel = Titanium.UI.createLabel({
	top: 20,
	center: 0,
	text: 'Instructions',
	font: {fontSize: 22, fontWeight: 'bold'},
	color: '#fff'
});

var fromInstructionLabel = Titanium.UI.createLabel({
	top: 50,
	left: 10,
	text: '* Click the Box on the left with the light text and input a number (In this example, 78 millimeters).',
	font: {fontSize: 14},
	color: '#fff'
});

var convertFromImage = Titanium.UI.createImageView({
	image:'convertFromLabel.png',
	top: 110,
	height: 50,
	width: 100,
	center: 0
});


var convertInstructionLabel = Titanium.UI.createLabel({
	top: 180,
	left: 10,
	right: 10,
	text: '* Once this is complete, hit the Convert button on the far right.',
	font: {fontSize: 14},
	color: '#fff'
});

var convertLabelImage = Titanium.UI.createImageView({
	image:'convertLabel.png',
	top: 220,
	height: 50,
	width: 100,
	center: 0
});


var toInstructionLabel = Titanium.UI.createLabel({
	top: 290,
	left: 10,
	text: '* Once the Convert button is pressed, the conversion should be in the right box (78 millimeters equals 7.80 centimeters).',
	font: {fontSize: 14},
	color: '#fff'
});

var convertToImage = Titanium.UI.createImageView({
	image:'convertToLabel.png',
	top: 350,
	height: 50,
	width: 100,
	center: 0
});


var noteLabel = Titanium.UI.createLabel({
	bottom: 20,
	center: 0,
	text: '** Note: Length conversions are not exact! They are rounded to the nearest hundredth.',
	font: {fontSize: 12},
	color: '#fff'
});


var instructionsView = Titanium.UI.createView({
    borderRadius: 5,
    width: 310,
    height: 500,
    left: 5,
    right: 5,
	font: {fontSize: 20},
	backgroundColor: '#333',
});
instructionsView.add(instructionLabel); 
instructionsView.add(fromInstructionLabel, convertFromImage, convertInstructionLabel, convertLabelImage, toInstructionLabel, convertToImage, noteLabel);

//Main Code
cWin.add(instructionsView);