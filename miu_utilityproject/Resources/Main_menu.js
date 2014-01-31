//Window
var cWin = Ti.UI.currentWindow;

var navWin = Ti.UI.iOS.createNavigationWindow({
	window: cWin
});

//Sign Off Button Start
var signOffButton = Ti.UI.createButton({
	title: "Sign Off",
	style: Ti.UI.iPhone.SystemButtonStyle.DONE,
	font:{fontWeight:'bold',fontSize:14, fontFamily:'Helvetica'},
});
var signOffWindow = function (){
	navWin.close();
};
signOffButton.addEventListener('click', signOffWindow);
cWin.setRightNavButton(signOffButton);
//Sign Off Button End


//MILLIMETER TO CENTIMETER CONVERTER START
// MM = CM Labels
var milliLabel = Ti.UI.createLabel({
    top: 10,
    left: 25,
    width: 100,
    color: '#000',
    text: 'Millimeters',
    font: {fontSize: 18}
});

var equalLabel1 = Ti.UI.createLabel({
    top: 40,
    left: 125,
	color: '#000',
    text: '=',
    font: {fontSize: 18}
});

var centiLabel1 = Titanium.UI.createLabel({
    top: 10,
    width: 100,
    right: 75,    
    color: '#000',
    text: 'Centimeters',
    textAlign: 'center',
    font: {fontSize : 18}
});

//Input text areas
var milliInput = Ti.UI.createTextField({
    top: 30,
    left: 20,
    width: 100,
    height: 40,
    borderWidth: 2,
    borderRadius: 3,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderColor: '#000',
    color: '#999',
	hintText: '123',
    textAlign: 'center',
    font: {fontSize: 18,fontWeight : 'bold'},    
    keyboardType: Ti.UI.KEYBOARD_NUMBER_PAD,
    returnKeyType: Ti.UI.RETURNKEY_DEFAULT    
});

//Convert button
var milliCon = Ti.UI.createButton({
    title: 'Convert',
    top: 35,
    right: 10
});

//Output result
var milliOutput = Titanium.UI.createLabel({
    borderWidth: 2,
    borderRadius: 5,
    top: 30,
    width: 100,
    height: 40,
    right: 75,
    color: '#000',
    borderColor: '#000',
    font: {fontSize : 18},
    textAlign: 'center',
    text: ''
});
 
var centi1 = 10;
milliCon.addEventListener('click', function(a) {
    milliOutput.text = (milliInput.value / centi1).toFixed(2);
});
//MILLIMETER TO CENTIMETER CONVERTER END




//CENTIMETER TO INCHES CONVERTER START
// CM = IN Labels
var centiLabel2 = Ti.UI.createLabel({
    left: 20,
    top: 100,
    width: 100,
    color: '#000',
    text: 'Centimeters',
    font: {fontSize: 18}
});

var equalLabel2 = Ti.UI.createLabel({
    top: 130,
    left: 125,
	color: '#000',
    text: '=',
    font: {fontSize: 18}
});

var inchLabel1 = Titanium.UI.createLabel({
    top: 100,
    width: 100,
    right: 75,
    color: '#000',
    text: 'Inches',
    textAlign: 'center',
    font: {fontSize : 18}
});

//Input text areas
var centiInput = Ti.UI.createTextField({
    top: milliInput.top + 90,
    left: 20,
    width: 100,
    height: 40,
    borderWidth: 2,
    borderRadius: 3,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderColor: '#000',
    color: '#999',
	hintText: '456',
    font: {fontSize: 18,fontWeight : 'bold'},
    textAlign: 'center',
    keyboardType: Ti.UI.KEYBOARD_NUMBER_PAD,
    returnKeyType: Ti.UI.RETURNKEY_DEFAULT
});

//Convert button
var centiCon = Ti.UI.createButton({
    top: 125,
    right: 10, 
    title: 'Convert'
});

//Output result
var centiOutput = Titanium.UI.createLabel({
    top: milliOutput.top + 90,
    width: 100,
    height: 40,
    right: 75,
    borderWidth: 2,
    borderRadius: 5,
    color: '#000',
    borderColor: '#000',
    font: {fontSize : 18},
    textAlign: 'center',
    text: ''
});
 
var inch1 = 2.54;
centiCon.addEventListener('click', function(b) {
    centiOutput.text = (centiInput.value / inch1).toFixed(2);
});
//CENTIMETER TO INCH CONVERTER END




//INCHES TO FEET CONVERTER START
// IN = FT Labels
var inchLabel2 = Ti.UI.createLabel({
    top: milliInput.width + 90,
    width: 100,
    left: 50,
    color: '#000',
    text: 'Inch',
    font: {fontSize: 18}
});

var equalLabel3 = Ti.UI.createLabel({
    left: 125,
    top: 220,
	color: '#000',
    text: '=',
    font: {fontSize: 18}
});

var feetLabel1 = Titanium.UI.createLabel({
    top: milliInput.width + 90,
    width: 100,
    right: 75,
    color: '#000',
    text: 'Feet',
    textAlign: 'center',    
    font: {fontSize : 18}
});

//Input text areas
var inchInput = Ti.UI.createTextField({
    top: centiInput.top + 90,
    left: 20,
    width: 100,
    height: 40,
    borderWidth: 2,
    borderRadius: 3,    
    marginLeft: 'auto',
    marginRight: 'auto',
    borderColor: '#000',
    color: '#999',
	hintText: '789',
	textAlign: 'center',
    font: {fontSize: 18,fontWeight : 'bold'},
    keyboardType: Ti.UI.KEYBOARD_NUMBER_PAD,
    returnKeyType: Ti.UI.RETURNKEY_DEFAULT   
});

//Convert button
var inchCon = Ti.UI.createButton({
    top : 215,
    right: 10,
    title : 'Convert'
});

//Output result
var inchOutput = Titanium.UI.createLabel({
    top: milliOutput.top + 180,
    width: 100,
    height: 40,
    right: 75,
    borderWidth: 2,
    borderRadius: 5,
    color: '#000',
    borderColor: '#000',
    font: {fontSize : 18},
    textAlign: 'center',
    text: ''
});
 
var foot1 = 12;
inchCon.addEventListener('click', function(c) {
    inchOutput.text = (inchInput.value / foot1).toFixed(2);
});
//INCHS TO FEET CONVERTER END


var instructions = Titanium.UI.createLabel({
	left: 20,
	text: 'Instructions',
	font: {fontSize: 20, fontWeight: 'bold'}
});

var arrow1 = Titanium.UI.createImageView({
	image:'forward-128.png',
	height: 25,
	right: 0
});

var instructionView = Titanium.UI.createView({
    bottom: 150,
    width: 300,
    height: 50,
    left: 10,
    right: 10,
    borderRadius: 5,
	font: {fontSize: 20},
	backgroundColor: '#f0ad4e',
	file: 'instructions.js'
});
instructionView.add(instructions, arrow1);

instructionView.addEventListener("click", function(){
	var inWindow = Ti.UI.createWindow({
		title: "Instructions",
		url: 'instructions.js',
		nav: navWin
	});
	navWin.openWindow(inWindow, {animate:true});
	});


var about = Titanium.UI.createLabel({
	left: 20,
	text: 'About Converter+',
	font: {fontSize: 20, fontWeight: 'bold'}
});

var arrow2 = Titanium.UI.createImageView({
	image:'forward-128.png',
	height: 25,
	right: 0
});

var aboutView = Titanium.UI.createView({
    bottom: 50,
    width: Ti.UI.setWidth - 20,
    height: 50,
    left: 10,
    right: 10,
    borderRadius: 5,
	font: {fontSize: 20},
	backgroundColor: '#f0ad4e',
	file:'about.js'
});
aboutView.add(about, arrow2);

aboutView.addEventListener("click", function(){
	var abWindow = Ti.UI.createWindow({
		title: "About Info",
		url: 'about.js',
		nav: navWin
	});
	navWin.openWindow(abWindow, {animate:true});
	});


//Main Code
cWin.add(instructionView, aboutView);
cWin.add(inchLabel2, equalLabel3, feetLabel1, inchInput, inchOutput, inchCon);
cWin.add(centiLabel2, equalLabel2, inchLabel1, centiInput, centiOutput, centiCon);
cWin.add(milliLabel, equalLabel1, centiLabel1, milliInput, milliOutput, milliCon);
navWin.open();