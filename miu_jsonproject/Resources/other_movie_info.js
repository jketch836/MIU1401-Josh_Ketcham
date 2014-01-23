Ti.UI.setBackgroundColor('white');

var cWindow = Ti.UI.currentWindow;


Ti.include('movie_json1.js');


//Table
var movieTable = Ti.UI.createTableView({
	style: Ti.UI.iPhone.TableViewStyle.PLAIN,
	headerTitle:"Released Date:",
	title: {fontSize: 22, fontFamily: "Helvetica"},
	height: 381,
	top:0,
	width: Ti.UI.setWidth,
	borderColor: "black"
});

	//Avengers Object Info
var theMovie = [];

		for(var i = 0, j = movieData['Spiderman'].movieRow.length; i<j; i++){
			var movieRows = Ti.UI.createTableViewRow({
				title: movieData['Spiderman'].movieRow[i].title,
				rating: movieData['Spiderman'].movieRow[i].rating,
				score: movieData['Spiderman'].movieRow[i].score,
				moviePic: movieData['Spiderman'].movieRow[i].moviePic,
				bannerPic: movieData['Spiderman'].movieRow[i].bannerPic,
				studio: movieData['Spiderman'].movieRow[i].studio, 
				release: movieData['Spiderman'].movieRow[i].release,
				synopsis: movieData['Spiderman'].movieRow[i].synopsis,
				overall: movieData['Spiderman'].movieRow[i].overall, 
				name: movieData['Spiderman'].movieRow[i].name,
				news: movieData['Spiderman'].movieRow[i].news,
				date: movieData['Spiderman'].movieRow[i].date,
				review:	movieData['Spiderman'].movieRow[i].review,												
				font: {fontSize: 18, fontFamily: "Arial"}
			});
		theMovie.push(movieRows);
	};



// Movie Info/Pics Start
movieTable.addEventListener("click", function(movieEvent){
	var movieWin = Ti.UI.createWindow ({
		title: movieEvent.source.title,
		font: {fontSize: 18, fontFamily: "Helvetica"},
		backgroundColor: "#fff"
	});
	
	var ScrollView = Ti.UI.createScrollView ({
		layout: 'vertical',
		showVerticalScrollIndicator: true
	});
	
	var bannerImage = Ti.UI.createImageView ({
		image: movieEvent.source.bannerPic,
		height: 175,
		width: Ti.UI.setwidth, 
		top: 5
	});
	
	var posterImage = Ti.UI.createImageView ({
		image: movieEvent.source.moviePic,
		height: 200,
		width: 150, 
		top: 185,
		left: 5
	});
		
	var infoView = Ti.UI.createView ({
		backgroundColor: "#f3f3f3",
		borderRadius: 5,
		height: 200,
		width: 150,
		top: 185,
		right: 5
	});
	
	var mRating = Ti.UI.createLabel ({
		text: movieEvent.source.rating,
		font: {fontSize: 14, fontFamily: "Helvetica", fontWeight: "bold", fontColor: "#000"},
		backgroundColor: "#f3f3f3",
		top: 5,
		left: 5
	});	
	
	var score10 = Ti.UI.createLabel ({
		text: movieEvent.source.score,
		font: {fontSize: 14, fontFamily: "Helvetica", fontWeight: "bold", fontColor: "#000"},
		top: 50,
		left: 5
	});	

	var releaseDate = Ti.UI.createLabel ({
		text: movieEvent.source.release,
		font: {fontSize: 14, fontFamily: "Helvetica", fontWeight: "bold", fontColor: "#000"},
		bottom: 5,
		left: 5
	});		

	var studioMake = Ti.UI.createLabel ({
		text: movieEvent.source.studio,
		font: {fontSize: 14, fontFamily: "Helvetica", fontWeight: "bold", fontColor: "#000"},
		bottom: 50,	
		left: 5
	});		
	
	var synopsisView = Ti.UI.createView ({
		backgroundColor: "#f3f3f3",
		borderRadius: 5,
		height: 150,
		width: Ti.UI.setWidth,
		top: 390,
		right: 5,
		left:5
	});

	var synopsisInfo = Ti.UI.createLabel ({
		text: movieEvent.source.synopsis,
		font: {fontSize: 12, fontFamily: "Helvetica", fontWeight: "bold", fontColor: "#000"},
		height: 'auto',
		width: 'auto'
		
	});
	
	synopsisView.add(synopsisInfo);
	infoView.add(mRating, score10, releaseDate, studioMake);
	movieWin.add(infoView, posterImage, bannerImage, synopsisView, ScrollView);
	cWindow.nav.openWindow(movieWin, {animate: true});
});
// Movie Info/Pics End
//Table End


//Sample View

var spidyPic = Ti.UI.createImageView({
	image: 'banner/spider-man-swinging.jpg',
	width: Ti.UI.setWidth,
	height: 170,
	bottom: 0,
	backgroundColor:"#fff",
});

movieTable.setData(theMovie);
cWindow.add(movieTable, spidyPic);