var userSelection;
var idNumber=0;
var comics;

var params={
			apikey: '9dcb20f1185fa9fc6ead79c1ce2be593'
			
		};

$(document).ready(function(){
	getMarvelHero();
	getComics(idNumber);
		// url2= "http://gateway.marvel.com/v1/public/characters/"+idNumber+"/comics?";
		// $.getJSON(url2,params,function(data2){
		// 	console.log("Title "+data2.data.results[0].title);
		// 	console.log("Description "+data2.data.results[0].description);
		// 	console.log("resourceURL "+data2.data.results[0].resourceURL);
		// 	console.log("resourceURL "+data2.data.results[0].urls[0].url);
		// });
});

//http://gateway.marvel.com:80/v1/public/characters?name=daredevil&apikey=9dcb20f1185fa9fc6ead79c1ce2be593

function getMarvelHero(){
	url = "http://gateway.marvel.com/v1/public/characters?name=daredevil";
	$.getJSON(url,params,function(data){
		//console.log(data.data);
		console.log(data.data.results[0]);
		console.log(data.data.results[0].id);
		idNumber = data.data.results[0].id;
		console.log(data.data.results[0].comics.items[0]);
		comics = data.data.results[0].comics.items[0];
		return idNumber;
	});
}

function getComics(idNumber){
	url2= "http://gateway.marvel.com/v1/public/characters/"+idNumber+"/comics?";
	$.getJSON(url2,params,function(data2){
		console.log("Title "+data2.data.results[0].title);
		console.log("Description "+data2.data.results[0].description);
		console.log("resourceURL "+data2.data.results[0].resourceURL);
		console.log("resourceURL "+data2.data.results[0].urls[0].url);
	});
}