//start with the function
var kittens = [];

var CutestKitten = function(name, image) {
	this.name = name;
	this.image = image;
	this.votes = 0;
	kittens.push(this);
}; 

// //if (localStorage !== null) {
// 	localStorage.getItems(CutestKitten);
// } else {
// 	getStorage();
// }

//then create the objects (deleted contestant1 so only 12 contestants total)


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

//generate random number
var randomImage1 = kittens[randomNumber()];
var randomImage2 = kittens[randomNumber()];

$('#imgId1').attr("src", randomImage1.image);
$('#imgId2').attr("src", randomImage2.image);

$("#imgTop").click function() {
	$(this).vote+=1());
}





//generate randomNumber
//$('#imgTop').html('<img src="images/02.jpg"' + randomKitten + '"images/03.jpg">');









function compareImg() {
	randomImage1 = randomNumber();
	randomImage2 = randomNumber();
	if (randomImage1 === randomImage2) {
		randomImage1 = randomNumber();
	}
	imgTop.src = kittens[randomImage1].image;
	imgBottom.src = kittens[randomImage2].image;
}

compareImg();

var kittenVote = function() {
	for(var i in kittens) {
		if(kittens[i].src === kittens) {
			kittens.votes +=1;
		}
	}
};



//then the array


