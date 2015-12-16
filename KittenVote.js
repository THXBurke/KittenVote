//start with the function
var kittens = [];

var CutestKitten = function(name, photo) {
	this.name = name;
	this.photo = photo;
	this.votes = 0;
	kittens.push(this);
}; 

if (localStorage !== null) {
	localStorage.getItems(CutestKitten);
} else {
	getStorage();
}

//then create the objects

var contestant1 = new CutestKitten("contestant1", "");
var contestant2 = new CutestKitten("contestant2", "");
var contestant3 = new CutestKitten("contestant3", "");
var contestant4 = new CutestKitten("contestant4", "");
var contestant5 = new CutestKitten("contestant5", "");
var contestant6 = new CutestKitten("contestant6", "");
var contestant7 = new CutestKitten("contestant7", "");
var contestant8 = new CutestKitten("contestant8", "");
var contestant9 = new CutestKitten("contestant9", "");
var contestant10 = new CutestKitten("contestant10", "");
var contestant11 = new CutestKitten("contestant11", "");
var contestant12 = new CutestKitten("contestant12", "");
var contestant13 = new CutestKitten("contestant13", "");

//create function to choose random image from contestants

function getRandom() {
	return Math.floor(Math.random() * kittens.length);
}

//then the array

