Ti.UI.setBackgroundColor('white');

var cWindow = Ti.UI.currentWindow;


//Activity Indicator open/close window
var loadingWin = Ti.UI.createWindow({
  backgroundColor: "#fff"
});

//Activity Indicator start
var style = Ti.UI.iPhone.ActivityIndicatorStyle.DARK;

var anIndicator = Ti.UI.createActivityIndicator({
	color: 'black',
	font: {fontSize: 18, fontFamily: "Helvetica", fontWeight: "bold"},
	message: 'Loading X-Men Movies....',
	style:style,
	center: 0,
	height:Ti.UI.SIZE,
	width:Ti.UI.SIZE
});
loadingWin.add(anIndicator);

loadingWin.addEventListener('open', function (e) {
  anIndicator.show();
  setTimeout(function(){
    e.source.close();
    anIndicator.hide();
  }, 2000);
});
//Activity Indicator end

Ti.include('movie_json1.js');

//ScrollView
	var movieScrollView = Titanium.UI.createScrollView({
		layout: 'vertical',
//		scrolltype: 'vertical',
		height: 336,
		width: 320,
	    top:0,
	    showVerticalScrollIndicator:true,
	    showHorizontalScrollIndicator:true
	});

moiveListTemplate = {
	properties:
		{
		height: 75	
		},
	childTemplates:
	[
		{
			type: "Ti.UI.ImageView",
			bindId: 'moviePic',
			properties:
			{
				width: 50,
				height: 75,
				left: 0,
				top:0
			}
		},
		{
			type: "Ti.UI.Label",
			bindId: 'title',
			properties:
			{
				color: "black",
				font: {fontSize: 18, fontFamily: "Arial", fontWeight: "bold"},
				left: 60,
				top: 0
			}
		},
		{
			type: "Ti.UI.Label",
			bindId: 'release',
			properties:
			{
				color: "grey",
				font: {fontSize: 14, fontFamily: "Arial"},
				left: 60,
				top: 40
			}
		},
		{
			type: "Ti.UI.Label",
			bindId: 'rating',
			properties:
			{
				color: "grey",
				font: {fontSize: 12, fontFamily: "Arial"},
				right: 5,
				top: 5
			}
		},
		{
			type: "Ti.UI.Label",
			bindId: 'score',
			properties:
			{
				color: "grey",
				font: {fontSize: 12, fontFamily: "Arial"},
				right: 5,
				top: 40
			}
		},
	],
};


	//Avengers Object Info
var listSection = Ti.UI.createListSection();
var movieListView = Ti.UI.createListView({	
	top:0,
	templates:{'defaultTemplate': moiveListTemplate},
	defaultItemTemplate: 'defaultTemplate'
	});


var theMovie = [];

for (var i=0, j=movieData['Xmen'].movieRow.length; i<j; i++){
		title = movieData['Xmen'].movieRow[i].title;
		rating = movieData['Xmen'].movieRow[i].rating;
		score = movieData['Xmen'].movieRow[i].score;
		moviePic = movieData['Xmen'].movieRow[i].moviePic;
		bannerPic = movieData['Xmen'].movieRow[i].bannerPic;
		studio = movieData['Xmen'].movieRow[i].studio;
		release = movieData['Xmen'].movieRow[i].release;
		synopsis = movieData['Xmen'].movieRow[i].synopsis;
		overall = movieData['Xmen'].movieRow[i].overall;
		name = movieData['Xmen'].movieRow[i].name;
		news = movieData['Xmen'].movieRow[i].news;
		date = movieData['Xmen'].movieRow[i].date;
		review = movieData['Xmen'].movieRow[i].review;
	theMovie.push
	({
			properties:
			{
				title: title,
				rating: rating,
				score: score,
				moviePic: moviePic,
				bannerPic: bannerPic,
				studio: studio,
				release: release,
				synopsis: synopsis,
				overall: overall,
				name: name,
				news: news,
				date: date,
				review: review,
			},	
				title:
					{
						text: title
					},
				rating:
					{
						text: rating
					},
				release:
					{
						text: release					
					},
				score:
					{
						text: score
					},
				moviePic:
					{
						image: moviePic
					}

		});
};


// Movie Info/Pics Start
movieScrollView.addEventListener("itemclick", function(movieEvent) {
	var item =  movieEvent.section.getItemAt(movieEvent.itemIndex);
	var movieWin = Ti.UI.createWindow({
		title : item.properties.title,
		font : {
			fontSize : 18,
			fontFamily : "Helvetica"
		},
		backgroundColor : "#fff",
		orientationModes: [ Titanium.UI.PORTRAIT ],
		width: 320,
		fullscreen: false
	});

	//ScrollView
	var movieScrollView1 = Titanium.UI.createScrollView({
		layout: 'vertical',
//		scrolltype: 'vertical',
		height: Ti.Platform.PlatformHeight,
		width: 320,
	    top:0,
	    showVerticalScrollIndicator:true,
	    showHorizontalScrollIndicator:true
	});

	var bannerImage = Ti.UI.createImageView({
		image : item.properties.bannerPic,
		height : 175,
		width : 320,
		top : 5,
		left : 5
	});

	var posterImage = Ti.UI.createImageView({
		image : item.properties.moviePic,
		height : 200,
		width : 150,
		top : 0,
		left : 5
	});

	var InfoView = Ti.UI.createView({
		backgroundColor : "#f3f3f3",
		borderRadius : 5,
		height : 200,
		width : 310,
		top : 20,
		left: 10,
		right: 5
	});

	var mRating = Ti.UI.createLabel({
		text : item.properties.rating,
		font : {
			fontSize : 14,
			fontFamily : "Helvetica",
			fontWeight : "bold",
			fontColor : "#000"
		},
		backgroundColor : "#f3f3f3",
		top : 10,
		left : 165
	});

	var score10 = Ti.UI.createLabel({
		text : item.properties.score,
		font : {
			fontSize : 14,
			fontFamily : "Helvetica",
			fontWeight : "bold",
			fontColor : "#000"
		},
		top : 70,
		left : 165
	});

	var releaseDate = Ti.UI.createLabel({
		text : item.properties.release,
		font : {
			fontSize : 14,
			fontFamily : "Helvetica",
			fontWeight : "bold",
			fontColor : "#000"
		},
		bottom : 70,
		left : 165
	});

	var studioMake = Ti.UI.createLabel({
		text : item.properties.studio,
		font : {
			fontSize : 14,
			fontFamily : "Helvetica",
			fontWeight : "bold",
			fontColor : "#000"
		},
		bottom : 10,
		left : 165
	});

	var synopsisView = Ti.UI.createView({
		backgroundColor : "#f3f3f3",
		borderRadius : 5,
		height : 150,
		width : 300,
		top : 20,
		right : 5,
		left : 5
	});

	var synopsisInfo = Ti.UI.createLabel({
		text : item.properties.synopsis,
		font : {
			fontSize : 12,
			fontFamily : "Helvetica",
			fontWeight : "bold",
			fontColor : "#000"
		},
	});

	var tomatoImage = Ti.UI.createImageView({
		image : 'pics/Rotten_Tomatoes_logo.jpg',
		height : 50,
		width : 150,
		top : 0,
		center : 0
	});

	var reviewInfoView = Ti.UI.createView({
		backgroundColor : "#f3f3f3",
		borderRadius : 5,
		height : 250,
		width : 300,
		top : 20,
		right : 5,
		left : 5
	});

	var overallLabel = Ti.UI.createLabel({
		text : item.properties.overall,
		font : {
			fontSize : 12,
			fontFamily : "Helvetica",
			fontWeight : "bold",
			fontColor : "#000"
		},
		top : 60,
		left : 20
	});

	var nameLabel = Ti.UI.createLabel({
		text : item.properties.name,
		font : {
			fontSize : 12,
			fontFamily : "Helvetica",
			fontWeight : "bold",
			fontColor : "#000"
		},
		top : 80,
		left : 20
	});

	var newsLabel = Ti.UI.createLabel({
		text : item.properties.news,
		font : {
			fontSize : 12,
			fontFamily : "Helvetica",
			fontWeight : "bold",
			fontColor : "#000"
		},
		top : 100,
		left : 20
	});

	var dateLabel = Ti.UI.createLabel({
		text : item.properties.date,
		font : {
			fontSize : 12,
			fontFamily : "Helvetica",
			fontWeight : "bold",
			fontColor : "#000"
		},
		top : 120,
		left : 20
	});
	
	var reviewLabel = Ti.UI.createLabel({
		text : item.properties.review,
		font : {
			fontSize : 12,
			fontFamily : "Helvetica",
			fontWeight : "bold",
			fontColor : "#000"
		},
		top : 140,
		left : 20
	});
	
	var rightsView = Ti.UI.createView({
		backgroundColor : "#f3f3f3",
		borderRadius : 5,
		height : 50,
		width : 300,
		top : 20,
		right : 5,
		left : 5
	});
	
	var itunesLabel = Ti.UI.createLabel({
		text : "* Movie information and poster found on iTunes Store",
		font : {
			fontSize : 10,
			fontFamily : "Helvetica",
			fontWeight : "bold",
			fontColor : "#000"
		},
		top : 10,
		center : 0
	});	

	var tomatoLabel = Ti.UI.createLabel({
		text : "* Review information and RT logo found on rottentomatos.com",
		font : {
			fontSize : 10,
			fontFamily : "Helvetica",
			fontWeight : "bold",
			fontColor : "#000"
		},
		top : 30,
		center : 0
	});	
	rightsView.add(itunesLabel, tomatoLabel);
	reviewInfoView.add(tomatoImage, overallLabel, nameLabel, newsLabel, dateLabel, reviewLabel);
	synopsisView.add(synopsisInfo);
	InfoView.add(posterImage, mRating, releaseDate, score10, studioMake);
	movieScrollView1.add(bannerImage, InfoView, synopsisView, reviewInfoView, rightsView);
	movieWin.add(movieScrollView1);
	cWindow.nav.openWindow(movieWin, {animate : true});
});
// Movie Info/Pics End
//Table End


// var searchBar = Titanium.UI.createSearchBar({
    // barColor:'#333',
    // opacity: .6, 
    // showCancel:true,
    // height:40,
    // top:0,
// });
// 
// searchBar.addEventListener('click', function(e){
     // movieListView.searchText = e.value;
     // Ti.API.info('e.value: ' + e.value);
     // Ti.API.info('listview: ' + $.movieListView.searchText);


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
	image: "banner/x-men-3-movie.jpg",
	height:Ti.UI.FIT,
	width: Ti.UI.FIT
});

var viewImage2 = Ti.UI.createImageView({
	image: "banner/X-men-first-class-original.jpg",
	height:Ti.UI.FIT,
	width: Ti.UI.FIT
});

var viewImage3 = Ti.UI.createImageView({
	image: "banner/the_wolverine.jpg",
	height:Ti.UI.FIT,
	width: Ti.UI.FIT
});


var x3View = Ti.UI.createView({
	height: 20,
	right: 30,
	left: 30,
	borderRadius: 5,
	bottom:0,
	opacity: .8,
	backgroundColor: '#fff'
});

var x3Label = Ti.UI.createLabel({
	text: 'X-Men: The Last Stand (2006)',
	font: {fontSize: 18, fontFamily: "Helvetica", fontWeight: "bold"}
});
x3View.add(x3Label);


var xfcView = Ti.UI.createView({
	height: 20,
	right: 30,
	left: 30,
	borderRadius: 5,
	bottom:0,
	opacity: .8,
	backgroundColor: '#fff'
});

var xfcLabel = Ti.UI.createLabel({
	text: 'X-Men: First Class (2011)',
	font: {fontSize: 18, fontFamily: "Helvetica", fontWeight: "bold"}
});
xfcView.add(xfcLabel);


var wolverineView = Ti.UI.createView({
	height: 20,
	right: 40,
	left: 40,
	borderRadius: 5,
	bottom:0,
	opacity: .8,
	backgroundColor: '#fff'
});

var wolverineLabel = Ti.UI.createLabel({
	text: 'The Wolverine (2013)',
	font: {fontSize: 18, fontFamily: "Helvetica", fontWeight: "bold"}
});
wolverineView.add(wolverineLabel);


samplePic1.add(viewImage1, x3View);
samplePic2.add(viewImage2, xfcView);
samplePic3.add(viewImage3, wolverineView);


var xmenPics = Ti.UI.createScrollableView({
	width: Ti.UI.setWidth,
	height: 170,
	bottom: 0,
	backgroundColor:"#fff",
	views: [samplePic1, samplePic2, samplePic3],
	showPagingControl: true,
	pagingControlColor: "#"
});


//Main Code
listSection.setItems(theMovie);
movieListView.sections = [listSection];
movieScrollView.add(movieListView);
cWindow.add(movieScrollView, xmenPics);
cWindow.nav.openWindow(loadingWin, {animate: true});