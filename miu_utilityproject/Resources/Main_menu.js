//Window
var cWin = Ti.UI.currentWindow;

var navWin = Ti.UI.iOS.createNavigationWindow({
	window: cWin
});


var signOffButton = Ti.UI.createButton({
	title: "Sign Off",
	style: Ti.UI.iPhone.SystemButtonStyle.DONE,
	file:'app.js'
});
// signOffButton.addEventListener('click', function(){
			// url:'app.js';
	// });
cWin.setRightNavButton(signOffButton);


var mmFeild = Titanium.UI.createTextArea({
    top:240,
    right:80,
    width:40,
    height:40,
    color:'#000',    
    hintText:'MM',
    font:{fontWeight:'bold',fontSize:14, fontFamily:'Helvetica', textAlign: 'center'},
    borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});


var cmFeild = Titanium.UI.createTextArea({
    top:240,
    right:60,
    width:40,
    height:40,
    color:'#000',    
    hintText:'CM',
    font:{fontWeight:'bold',fontSize:14, fontFamily:'Helvetica', textAlign: 'center'},
    borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});


var inFeild = Titanium.UI.createTextArea({
    top:240,
    right:40,
    width:40,
    height:40,
    color:'#000',    
    hintText:'IN',
    font:{fontWeight:'bold',fontSize:14, fontFamily:'Helvetica', textAlign: 'center'},
    borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});

// var convert function ({
	// var mmTOcm = Ti.UI.convertUnits(mmFeild.text, Ti.UI.UNIT_CM);
	// var cmTOin = Ti.UI.convertUnits(cmFeild.text, Ti.UI.UNIT_IN);
	// var mmTOin = Ti.UI.convertUnits(mmFeild.text, Ti.UI.UNIT_IN);
	// if (mmFeild){
// 		
	// }
// })


var converted = Titanium.UI.createTextArea({
    top:240,
    right:40,
    width:40,
    height:40,
    color:'#000',
//    text: ,
    font:{fontWeight:'bold',fontSize:14, fontFamily:'Helvetica', textAlign: 'center'},
    borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});

//Main Code
cWin.add(mmFeild, cmFeild, inFeild);
navWin.open();