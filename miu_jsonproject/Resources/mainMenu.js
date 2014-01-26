Ti.UI.setBackgroundColor('white');
//Main Window
var cWindow = Ti.UI.currentWindow;

var navWin1 = Ti.UI.iOS.createNavigationWindow({
	window: cWindow
});


//Window Views
var categoryView = Ti.UI.createView({
	height: 320,
	top:0,
	width: 320,
	backgroundColor: '#fff'
});

// var searchBar = Titanium.UI.createSearchBar({
    // barColor:'#333',
    // opacity: .6, 
    // showCancel:true,
    // height:40,
    // top:0,
// });
// 
// searchBar.addEventListener('click', function(){
	// var searchBarTable = Ti.UI.createTableView({
		// style: Ti.UI.iPhone.TableViewStyle.PLAIN,
		// title: {fontSize: 18, fontFamily: "AmericanTypewriter"},
		// height: 275,
		// top: 20,
		// width: Ti.UI.setWidth,
		// borderColor: "black"
	// });
    // cWindow.nav.openWindow(searchBarTable);
     
//Categories
	var avengerView = Ti.UI.createView({
		borderRadius: 5,
		height: 100,
		width: 320,
		top:0,
		left: 0,
		backgroundColor: "#2001FF",
		file: 'avenger_movie_info.js'
	});
	var avengerLabel = Ti.UI.createLabel({
		text: "Avenger Movies",
		font: {fontSize: 18, fontFamily: "Helvetica", fontWeight: "bold"},
		left: 20,
		color: "#fff"
	});
	
	var avengerImage = Ti.UI.createImageView({
		image : 'pics/AVENGERS_LOGO_VERSION_1.png',
		height : 90,
		width : 90,
		right: 35
	});
	
	var arrowImage = Ti.UI.createImageView({
		image : 'pics/forward-128.png',
		height : 20,
		width : 20,
		right: 3
	});
	avengerView.add(avengerLabel, avengerImage, arrowImage);
	
	
	avengerView.addEventListener("click", function(){
		var moWindow = Ti.UI.createWindow({
			title: "Avengers Movies",
			url: 'avenger_movie_info.js',
			nav: navWin1
		});
		navWin1.openWindow(moWindow, {animate:true});
	});
	
	
	var xmenView = Ti.UI.createView({
		borderRadius: 5,
		height: 100,
		width: 320,
		center: 0,
		backgroundColor: "#333",
		file: 'xmen_movie_info.js'
	});
	
	var xmenLabel = Ti.UI.createLabel({
		text: "X-Men Movies",
		font: {fontSize: 18, fontFamily: "Helvetica", fontWeight: "bold"},
		left: 20,
		color: "#fff"

	});
	
	var xmenImage = Ti.UI.createImageView({
		image : 'pics/239px-X_symbol_from_X-Men_logo.svg.png',
		height : 90,
		width : 90,
		right: 35
	});
	
	var arrowImage = Ti.UI.createImageView({
		image : 'pics/forward-128.png',
		height : 20,
		width : 20,
		right: 3
	});
	xmenView.add(xmenLabel, xmenImage, arrowImage);
	
	xmenView.addEventListener("click", function(){
		var moWindow = Ti.UI.createWindow({
			title: "X-Men Movies",
			url: 'xmen_movie_info.js',
			nav: navWin1
		});
		navWin1.openWindow(moWindow, {animate:true});
	});
	
	
	var otherView = Ti.UI.createView({
		borderRadius: 5,
		height: 100,
		width: 320,
		bottom: 0,
		backgroundColor: "#68051D",
	});
	
	var otherLabel = Ti.UI.createLabel({
		text: "Other Marvel Movies",
		font: {fontSize: 18, fontFamily: "Helvetica", fontWeight: "bold"},
		left: 20,
		color: "#fff"
	});
	
	var otherImage = Ti.UI.createImageView({
		image : 'pics/spiderman_logo_by_navdbest-d5iog9h.png',
		height : 90,
		width : 90,
		right: 35
	});
	
	var arrowImage = Ti.UI.createImageView({
		image : 'pics/forward-128.png',
		height : 20,
		width : 20,
		right: 3
	});
	otherView.add(otherLabel, otherImage, arrowImage);

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


var menuPics = Ti.UI.createScrollableView({
	width: 320,
	height: 'auto',
	top: 320,
	backgroundColor:"#fff",
	views: [samplePic1, samplePic2, samplePic3],
	showPagingControl: true,
	pagingControlColor: "#"
});


//Main Code
categoryView.add(avengerView, xmenView, otherView);
cWindow.add(categoryView, menuPics);
navWin1.open();


//Avengers logo found at http://2.bp.blogspot.com/-QXYmIYqx1OY/UPSmJnC1DBI/AAAAAAAAAEI/k-vqX3lfThI/s1600/AVENGERS%2BLOGO%2BVERSION%2B1.png
//X-Men Logo found at http://upload.wikimedia.org/wikipedia/commons/thumb/2/28/X_symbol_from_X-Men_logo.svg/239px-X_symbol_from_X-Men_logo.svg.png
//Spiderman Logo found at http://4.bp.blogspot.com/-VRjZQA7dVw0/Us-EupqcduI/AAAAAAAAEy0/otUiWE4TxjI/s1600/spiderman_logo_by_navdbest-d5iog9h.png