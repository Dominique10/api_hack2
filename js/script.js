$(document).ready(function(){

	//$.get( "http://gateway.marvel.com:80/v1/public/characters?name=daredevil&apikey=9dcb20f1185fa9fc6ead79c1ce2be593", function( data ) {
  //$( ".result" ).html( data );
 // console.log(data);
  //alert( "Load was performed." );




	var params={
			//part: 'snippet',
			//name: 'daredevil',
			apikey: '9dcb20f1185fa9fc6ead79c1ce2be593'
			
		};
		url = "http://gateway.marvel.com/v1/public/characters?name=daredevil";
		$.getJSON(url,params,function(data){
			console.log(data.data);
			console.log(data.results[0].description);
		});
});

//http://gateway.marvel.com:80/v1/public/characters?name=daredevil&apikey=9dcb20f1185fa9fc6ead79c1ce2be593