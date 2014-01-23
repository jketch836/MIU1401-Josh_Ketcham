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



//Window Views
var categoryView = Ti.UI.createView({
	height: 320,
	top:0,
	width: Ti.UI.setWidth,
	backgroundColor: '#fff'
});


//Categories
	var avengerView = Ti.UI.createView({
		borderRadius: 1,
		height:100,
		width: Ti.UI.setWidth,
		top:0,
		color: "B29D9D",
		file: 'avenger_movie_info.js'
	});
	
	var avengerLabel = Ti.UI.createLabel({
		text: "Avenger Movies",
		font: {fontSize: 16, fontFamily: "Helvetica", fontWeight: "bold"},
		left: 40,
		color: "#000"
	});
	avengerView.add(avengerLabel);
	
	avengerView.addEventListener("click", function(){
		var moWindow = Ti.UI.createWindow({
			title: "Avengers Movies",
			url: 'avenger_movie_info.js',
			nav: navWin1
		});
		navWin1.openWindow(moWindow, {animate:true});
	});
	
	
	var xmenView = Ti.UI.createView({
		borderRadius: 1,
		height:100,
		width: Ti.UI.setWidth,
		center: 0,
		color: "#000",
		file: 'xmen_movie_info.js'
	});
	
	var xmenLabel = Ti.UI.createLabel({
		text: "X-Men Movies",
		font: {fontSize: 16, fontFamily: "Helvetica", fontWeight: "bold"},
		left: 40,
		color: "#000"

	});
	xmenView.add(xmenLabel);
	
	xmenView.addEventListener("click", function(){
		var moWindow = Ti.UI.createWindow({
			title: "X-Men Movies",
			url: 'xmen_movie_info.js',
			nav: navWin1
		});
		navWin1.openWindow(moWindow, {animate:true});
	});
	
	
	var otherView = Ti.UI.createView({
		borderRadius: 1,
		height:100,
		width: Ti.UI.setWidth,
		bottom: 0,
		color: "B29D9D",
	});
	
	var otherLabel = Ti.UI.createLabel({
		text: "Other Marvel Movies",
		font: {fontSize: 16, fontFamily: "Helvetica", fontWeight: "bold"},
		left: 40,
		color: "#000"
	});
	otherView.add(otherLabel);

	otherView.addEventListener("click", function(){
		var moWindow = Ti.UI.createWindow({
			title: "Other Marvel Movies",
			url: 'other_movie_info.js',
			nav: navWin1
		});
		navWin1.openWindow(moWindow, {animate:true});
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


var avengeView = Ti.UI.createView({
	height: 20,
	right: 70,
	left: 70,
	borderRadius: 5,
	bottom:0,
	opacity: .8,
	backgroundColor: '#fff'
});

var avenvgeLabel = Ti.UI.createLabel({
	text: 'The Avengers (2012)',
	font: {fontSize: 18, fontFamily: "Helvetica", fontWeight: "bold"}
});
avengeView.add(avenvgeLabel);


var thexmenView = Ti.UI.createView({
	height: 20,
	right: 70,
	left: 70,
	borderRadius: 5,
	bottom:0,
	opacity: .8,
	backgroundColor: '#fff'
});

var thexmenLabel = Ti.UI.createLabel({
	text: 'X-Men (2000)',
	font: {fontSize: 18, fontFamily: "Helvetica", fontWeight: "bold"}
});
thexmenView.add(thexmenLabel);


var spidyView1 = Ti.UI.createView({
	height: 20,
	right: 10,
	left: 10,
	borderRadius: 5,
	bottom:0,
	opacity: .8,
	backgroundColor: '#fff'
});

var spidyLabel1 = Ti.UI.createLabel({
	text: 'The Amazing Spiderman (2012)',
	font: {fontSize: 18, fontFamily: "Helvetica", fontWeight: "bold"}
});
spidyView1.add(spidyLabel1);


samplePic1.add(viewImage1, avengeView);
samplePic2.add(viewImage2, thexmenView);
samplePic3.add(viewImage3, spidyView1);


var samplePics = Ti.UI.createScrollableView({
	width: Ti.UI.setWidth,
	height: 'auto',
	top: 320,
	backgroundColor:"#fff",
	views: [samplePic1, samplePic2, samplePic3],
	showPagingControl: true,
	pagingControlColor: "#"
});



//Main Code
categoryView.add(avengerView, xmenView, otherView);
cWindow.add(categoryView, samplePics);
navWin1.open();