Ti.UI.setBackgroundColor ('white');

//Landing Page
var mWindow = Ti.UI.createWindow({
	title: "Login page"
});


var image = Ti.UI.createImageView({
	image:'ruler.png',
	top: 70
});


var theUsername = Titanium.UI.createTextField({
    top:240,
    left:10,    
    height:40,
    width:300,
    color:'#000',    
    hintText:'Username',
    value: '',
    font:{fontSize:15, fontWeight:'bold', fontFamily:'Helvetica'},
    borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});

var thePassword = Titanium.UI.createTextField({
    top:290,
    left:10,
    height:40,
    width:300,
    color:'#000',
    hintText:'Password',
    passwordMask: true,
    value: '',
    font:{fontSize:15, fontWeight:'bold', fontFamily:'Helvetica'},
    borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});

var signInButton = Ti.UI.createButton({
    top:340,
    width:90,
    height:35,
    borderRadius:5,
    title:'Sign In',
   	font:{fontWeight:'bold',fontSize:16, fontFamily:'Helvetica'},
   	file: 'Main_menu.js'
});
 
signInButton.addEventListener('click', function(){
	if (theUsername.value != '' & thePassword.value != ''){
		// var alertDialog = Ti.UI.createAlertDialog({
        	// title: 'Login Successful',
        	// buttonNames: ['OK']
   		// });
   		var mainWindow = Titanium.UI.createWindow({  
			title:'Main Menu',
			backgroundColor:'#fff',
			url:'Main_menu.js'
		});
		mainWindow.open(mainWindow, {animate: true});
		// alertDialog.show();
	} else {
		var alertDialogPTA = Ti.UI.createAlertDialog({
    		title: 'Please try agin',
        	buttonNames: ['OK']
    	});	
    	alertDialogPTA.show();
	}
});



//Main Code
mWindow.add(image, theUsername, thePassword, signInButton);
mWindow. open();