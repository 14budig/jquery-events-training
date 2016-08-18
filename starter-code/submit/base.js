console.log("Sanity Check: JS is working!");

var rick_roll_youtube_embed_code = "<iframe width='420' height='315' src='https://www.youtube.com/embed/dQw4w9WgXcQ' frameborder='0' allowfullscreen></iframe>";

$(document).ready(function(){
  $('form').submit(function(event){
    event.preventDefault();
    $(rick_roll_youtube_embed_code).appendTo('body');
  });
  $("#time").text( Date.now() );

})
