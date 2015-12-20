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

var imgTop = document.getElementById("imgTop");
var imgBottom = document.getElementById("imgBottom");

//generate random image to appear
var randomImage1 = kittens[randomNumber()];
var randomImage2 = kittens[randomNumber()];

$('#imgId1').attr("src", randomImage1.image);
$('#imgId2').attr("src", randomImage2.image);

//check for and override duplicates
if (randomImage1 ===randomImage2) {
	randomImage2 = randomNumber();
}

//click event for voting 





//$("#imgId1,").on("click").function(vote) {
	//$(this).vote("");
//});



//seems like a good idea eventually...
if (localStorage !== null) {
	localStorage.getItem(CutestKitten);
} else {
	getStorage();
}
	



//allows for next round of votes
var voteAgain = document.createElement('button');
	voteAgain.setAttribute('id', 'vote');
	voteAgain.innerHTML = ("Vote Again!");
	document.body.appendChild(voteAgain);

function hideButton() {

}

//highlight winner




//prevent same random image from loading












