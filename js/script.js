var userSelection;
var idNumber=0;
var comicsInformation;
var input;
var comicCover;
var correctHero;
var params={
	apikey: '9dcb20f1185fa9fc6ead79c1ce2be593'
			
	};

$(document).ready(function(){
	$('#myForm').submit(function(e){
		e.preventDefault();
		input = $(this).find("input[name='userinput']").val();
		searchHero(input);
		$(".results").empty();
		  $('.hero').on('click', function(event){
	    input=$(this).closest('.hero').val();
	    getMarvelHero(input);
	  })
	});
})


function getMarvelHero(hero){
	url = "http://gateway.marvel.com/v1/public/characters?name="+hero;
	$.getJSON(url,params,function(data){
		idNumber = data.data.results[0].id;
		getComics(idNumber);
	});
}

function getComics(idNumber){
	url2= "http://gateway.marvel.com/v1/public/characters/"+idNumber+"/comics?";
	$.getJSON(url2,params,function(data2){
		comicsInformation = data2.data.results;
		for (var i =0; i < comicsInformation.length; i++) {
			var heroDetails =getHeroComicSelection(comicsInformation,i);
			$('.results').append(heroDetails);
		};
	});
}

function getHeroComicSelection(comicSelection,i){

			var result = $('.templates .title').clone();
	
			// Set the title properties in result
			var titleElem = result.find('.title-text a');
			titleElem.attr('href', comicSelection[i].urls[0].url);
			titleElem.text(comicSelection[i].title);

			var descriptionElem = result.find('dl.result.title');
			descriptionElem.attr('title', comicSelection[i].description);
			console.log(comicSelection[i].description);

			url3= "http://gateway.marvel.com/v1/public/comics/"+comicSelection[i].id;
			$.getJSON(url3,params,function(data3){
				var coverElem = result.find('.cover img');
				coverElem.attr('src', data3.data.results[0].images[0].path+".jpg");
			});
			return result;
}

function searchHero(userHeroToSearch){
	url = "http://gateway.marvel.com/v1/public/characters?nameStartsWith="+userHeroToSearch;
	$.getJSON(url,params,function(data){
		var heroName = data.data.results;
		console.log(heroName);
		for (var i = 0; i < heroName.length; i++) {
			correctHero = heroName[i].name;
			console.log(correctHero);
			$('.hero').append("<div><a href='#'></a>"+correctHero+"</div>");
		}
	});
}