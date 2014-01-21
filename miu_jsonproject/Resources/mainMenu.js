Ti.UI.setBackgroundColor('white');
//Main Window
var cWindow = Ti.UI.currentWindow;

var navWin1 = Ti.UI.iOS.createNavigationWindow({
	window: cWindow
});


// //Activity Indicator open/close window
// var noPointWin = Ti.UI.createWindow({
  // backgroundColor: "#fff"
// });
// 
// //Activity Indicator start
// var style = Ti.UI.iPhone.ActivityIndicatorStyle.DARK;
// 
// var theIndicator = Ti.UI.createActivityIndicator({
	// color: 'black',
	// font: {fontSize: 22, fontFamily: "AmericanTypewriter", fontWeight: "bold"},
	// message: 'Showing House History....',
	// style:style,
	// center: 0,
	// height:Ti.UI.SIZE,
	// width:Ti.UI.SIZE
// });
// noPointWin.add(theIndicator);
// 
// noPointWin.addEventListener('open', function (e) {
  // theIndicator.show();
  // setTimeout(function(){
    // e.source.close();
    // theIndicator.hide();
  // }, 4000);
// });
// //Activity Indicator end




var categoryTableList = Ti.UI.createTableView({
	style: Ti.UI.iPhone.TableViewStyle.PLAIN,
	headerTitle:'Categories',
	title: {fontSize: 22, fontFamily: "Helvetica", textAlign: 'center'},
	height: 325,
	top:0,
	width: Ti.UI.setWidth,
	backgroundColor: '#fff'
});


//Sample View
var samplePic1 = Ti.UI.createView({
	backgroundColor: "#000"
});

var samplePic2 = Ti.UI.createView({
	backgroundColor: "#000"
});

var samplePic3 = Ti.UI.createView({
	backgroundColor: "#000"
});

var viewImage1 = Ti.UI.createImageView({
	image: "banner/the-avengers-22.jpg",
	height:Ti.UI.FIT,
	width: Ti.UI.FIT
});

var viewImage2 = Ti.UI.createImageView({
	image: "banner/xmen_0.jpg",
	height:Ti.UI.FIT,
	width: Ti.UI.FIT
});

var viewImage3 = Ti.UI.createImageView({
	image: "banner/spider-man-swinging.jpg",
	height:Ti.UI.FIT,
	width: Ti.UI.FIT
});

var viewLabel1 = Ti.UI.createLabel({
	text: 'The Avengers (2012)'
});

samplePic1.add(viewImage1, viewLabel1);
samplePic2.add(viewImage2);
samplePic3.add(viewImage3);


var samplePics = Ti.UI.createScrollableView({
	width: Ti.UI.setWidth,
	height: 'auto',
	top: 325,
	backgroundColor:"#fff",
	views: [samplePic1, samplePic2, samplePic3],
	showPagingControl: true,
	pagingControlColor: "#"
});

// categoryTable.addEventListener("click", function(houseEvent){
	// var movieWindow = Ti.UI.createWindow({
		// title: houseEvent.source.title,
		// font: {fontSize: 18, fontFamily: "AmericanTypewriter"},
		// backgroundImage: houseEvent.source.housePicture,
		// backgroundColor: "#252525"
	// });

// var movieTable = Ti.UI.createTableView({
	// style: Ti.UI.iPhone.TableViewStyle.PLAIN,
	// headerTitle:"Categories",
	// title: {fontSize: 22, fontFamily: "Helvetica"},
	// height: 275,
	// top: 20,
	// width: Ti.UI.setWidth,
	// borderColor: "black"
// });
// 
// 
// var avengerView = Ti.UI.createView({
	// backgroundColor: "#000",
	// borderRadius: 10,
	// height:50,
	// bottom: 120
// });
// 
// var avengerLabel = Ti.UI.createLabel({
	// text: "Enter",
	// font: {fontSize: 24, fontFamily: "Helvetica", fontWeight: "bold"},
	// color: "#fff",
	// center: 0
// });
// 
// var avengerImage = Ti.UI.createImageView({
	// image: "posters/avengers.jpg",
	// left: 0
// });
// avengerView.add(avengerLabel, avengerImage);
// 
// 
// avengerView.addEventListener("click", function(){
	// var mWindow = Ti.UI.createWindow({
	// });
	// mWindow.open(mWindow, {animate:true});
// });


cWindow.add(categoryTableList, samplePics);
// cWindow.open(noPointWin, {animate: true});
navWin1.open();