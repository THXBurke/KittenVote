//start with the function
var kittens = [];

var CutestKitten = function(name, image) {
	this.name = name;
	this.image = image;
	this.votes = 0;
	kittens.push(this);
	this.highlight;
}; 


//create the objects (deleted contestant1 so only 12 contestants total)


var contestant2 = new CutestKitten("contestant2", "images/02.jpg");
var contestant3 = new CutestKitten("contestant3", "images/03.jpg");
var contestant4 = new CutestKitten("contestant4", "images/04.jpg");
var contestant5 = new CutestKitten("contestant5", "images/05.jpg");
var contestant6 = new CutestKitten("contestant6", "images/06.jpg");
var contestant7 = new CutestKitten("contestant7", "images/07.jpg");
var contestant8 = new CutestKitten("contestant8", "images/08.jpg");
var contestant9 = new CutestKitten("contestant9", "images/09.jpg");
var contestant10 = new CutestKitten("contestant10", "images/10.jpg");
var contestant11 = new CutestKitten("contestant11", "images/11.jpg");
var contestant12 = new CutestKitten("contestant12", "images/12.jpg");
var contestant13 = new CutestKitten("contestant13", "images/13.jpg");

//create function to choose random image from contestants

function randomNumber() {
	return Math.floor(Math.random() * kittens.length);
}

var imgLeft = document.getElementById("imgLeft");
var imgRight = document.getElementById("imgRight");

//generate random image to appear
function refresh(){
var randomImage1 = kittens[randomNumber()];
var randomImage2 = kittens[randomNumber()];


$('#imgId1').attr("src", randomImage1.image);
$('#imgId2').attr("src", randomImage2.image);

//check for and override duplicates
if (randomImage1 === randomImage2) {
	randomImage2 = kittens[randomNumber()];
	$('#imgId2').attr("src", randomImage2.image);	
}

//click event for voting 

$("#imgId1").on("click", function(vote) {
	randomImage1.votes += 1;
	console.log(randomImage1.votes);
});

$("#imgId2").on("click", function(vote) {
	randomImage2.votes += 1;
	console.log(randomImage2.votes)
});

};
refresh();

$("#refresh").on("click", function(){
	refresh();
})


//Chart.js polar chart
// Get context with jQuery - using jQuery's .get() method.
 $("#myChart").get(+=1).get("2d");
// This will get the first returned node in the jQuery collection.
var myChart = new Chart(getVotes);

new myChart(votes).PolarArea(data, options);

var polarData = [
	{
		label: "contestant2",
		value: contestant2.votes,
		color: "#878BB6"
	},
	{
		label: "contestant3",
		value: contestant3.votes,
		color: "#4ACAB4"
	},
	{
		label: "contestant4",
		value: contestant4.votes,
		color: "#8ce8cc"
	},
	{
		label: "contestant5",
		value: contestant5.votes,
		color: "#8DFFFF"
	},
	{
		label: "contestant6",
		value: contestant6.votes,
		color: "#FF66A3"
	},
	{
		label: "contestant7",
		value: contestant7.votes,
		color: "#66FF99"
	},
	{	
		label: "contestant8",
		value: contestant8.votes,
		color:  "#85A3FF"
	},
	{
		label: "contestant9",
		value: contestant9.votes,
		color: "#DBDB4D"
	},
	{
		label: "contestant10",
		value: contestant10.votes,
		color: "#66FFCC"
	},
	{
		label: "contestant11",
		value: contestant11.votes,
		color: "#FF99CC"
	},
	{
		label: "contestant12",
		value: contestant12.votes,
		color:  "#FF3333"
	},
	{
		label: "contestant13",
		value: contestant13.votes,
		color: "#9999FF"
	}
];


var polarOptions = {
	segmentShowsStroke: false,
	animateScale: true,
	animateRotate: false
}

Chart.defaults.global.responsive = true;

var myChart = document.getElementById("myChart").getContext("2d");
var myChart = new Chart(CutestKitten).PolarArea(polarData, polarOptions);

//highlight cutest

$(".imgLeft").live("click", function(){ 
    var id = this.id;
    $('div[id^="item"]').css({'background':'none'})
    $("#item"+id).css({'background':'#35203B'});
});

$(".imgRight").live("click", function(){ 
    var id = this.id;
    $('div[id^="item"]').css({'background':'none'})
    $("#item"+id).css({'background':'#35203B'});
});




