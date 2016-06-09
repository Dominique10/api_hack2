var userSelection;
var idNumber=0;
var comicsInformation;
var input;
var comicCover;
var params={
			apikey: '9dcb20f1185fa9fc6ead79c1ce2be593'
			
		};

$(document).ready(function(){

});

$('#myForm').submit(function(e){
	e.preventDefault();
	input = $(this).find("input[name='userinput']").val();
	console.log(input);
	getMarvelHero(input);
})

function getMarvelHero(hero){
	url = "http://gateway.marvel.com/v1/public/characters?name="+hero;
	$.getJSON(url,params,function(data){

		console.log(data.data.results[0]);
		console.log(data.data.results[0].id);
		idNumber = data.data.results[0].id;

		console.log(data.data.results[0].comics.items[0]);

		getComics(idNumber);
	});
}

function getComics(idNumber){
	url2= "http://gateway.marvel.com/v1/public/characters/"+idNumber+"/comics?";
	$.getJSON(url2,params,function(data2){
		 console.log("Title "+data2.data.results[0].title);
		 console.log(data2.data.results);

		comicsInformation = data2.data.results;
		for (var i =0; i < comicsInformation.length; i++) {
			var heroDetails =getHeroComicSelection(comicsInformation,i);
			$('results').append(heroDetails);
			// console.log("Title "+comicsInformation[i].title);
			// console.log("Description "+comicsInformation[i].description);

			// console.log("resourceURL "+comicsInformation[i].urls[0].url);
			// getComicCover(comicsInformation[i].id);

			// var result = $('.templates .title').clone();
	
			// // Set the title properties in result
			// var titleElem = result.find('.title-text a');
			// titleElem.attr('href', comicsInformation[i].urls[0].url);
			// titleElem.text(comicsInformation[i].title);

			// var descriptionElem = result.find('.description');
			// descriptionElem.text(comicsInformation[i].description);

			// var coverElem = result.find('.cover img');
			// coverElem.attr('src', comicCover);

			// return result;
		};
	});
}

function getComicCover(comicCode){
	url3= "http://gateway.marvel.com/v1/public/comics/"+comicCode;
	$.getJSON(url3,params,function(data3){
		console.log(data3.data.results[0]);
		comicCover = data3.data.results[0].images[0].path +".jpg";
	});
}

function getHeroComicSelection(comicSelection,i){
	console.log("Title "+comicSelection[i].title);
			console.log("Description "+comicSelection[i].description);

			console.log("resourceURL "+comicSelection[i].urls[0].url);
			getComicCover(comicSelection[i].id);

			var result = $('.templates .title').clone();
	
			// Set the title properties in result
			var titleElem = result.find('.title-text a');
			titleElem.attr('href', comicSelection[i].urls[0].url);
			titleElem.text(comicSelection[i].title);

			var descriptionElem = result.find('.description');
			descriptionElem.text(comicSelection[i].description);

			var coverElem = result.find('.cover img');
			coverElem.attr('src', comicCover);

			return result;
}