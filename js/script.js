// storing token better use your own insta token.
var token = '5322494348.f5fe872.4fe04e2c71704e36b853e72ba4d34859',
      hashtag='hydtrailblazin',
      num_photos = 9;
// AJAX request for geting json file.
  $.ajax({
  	url: 'https://api.instagram.com/v1/tags/' + hashtag + '/media/recent',
  	dataType: 'jsonp',
  	type: 'GET',
  	data: {access_token: token, count: num_photos},
  	success: function(data){
  		console.log(data);
  		for(x in data.data){
  			$('ul').append('<li><img style="width: 150px; height: 125px;" src="'+data.data[x].images.standard_resolution.url+'"></li>');
  		}
  	},
  	error: function(data){
  	console.log(data);
  	}
  });
