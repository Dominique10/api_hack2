var userSelection;
var idNumber;

$(document).ready(function(){

	var params={
			//part: 'snippet',
			//name: 'daredevil',
			apikey: '9dcb20f1185fa9fc6ead79c1ce2be593'
			
		};
		url = "http://gateway.marvel.com/v1/public/characters?name=daredevil";
		$.getJSON(url,params,function(data){
			//console.log(data.data);
			console.log(data.data.results[0]);
			idNumber= data.data.results[0];
			console.log(data.data.results[0].comics.items[0]);
		});
		url2= "http://gateway.marvel.com/v1/public/characters/"+idNumber+"/comics?";
		$.getJSON(url2,params,function(data2){
			console.log("Title "+data2.data.results['title']);
			console.log("Title "+data2.data.results[description]);
		});
});

//http://gateway.marvel.com:80/v1/public/characters?name=daredevil&apikey=9dcb20f1185fa9fc6ead79c1ce2be593