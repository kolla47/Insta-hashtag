$(document).ready(function(){
  $('#submit-btn').click(function(){
    $("ul").empty();
    var token = '5322494348.f5fe872.4fe04e2c71704e36b853e72ba4d34859';
    var $greeting = $('#greeting');

    var hashtag = $('#hashtag').val();

    $greeting.text('So, you want to search for ' + hashtag + '?');

    var num_photos = 9;
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
    return false;
  })

})
