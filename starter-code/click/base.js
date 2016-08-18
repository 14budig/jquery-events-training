console.log("Sanity Check: JS is working!");

$(document).ready(function(){
  $('span').on('click', function(){
    var text = $(this).html();
    $('<li>' + text + ' at ' + Date.now() + '</li>').appendTo('ul');
  });
});
