console.log("Sanity Check: JS is working!");

$(document).ready(function(){

  $("#time").text( Date.now() );
  $('<button name="reset" id="reset">Reset</button').appendTo('body');  //Text doesn't work?  Look into this for later
  $('#reset').text("Reset");                //Quick and dirty fix
  $('#reset').bind("click", function(){
    $('input').val("");
  });

  $('.add').on('change', function(){
    var leftNum = $('#left').val();
    var rightNum = $('#right').val();
    if(leftNum === ""){
      leftNum = 0;
    }
    else{
      leftNum = parseInt(leftNum);
    }
    if(rightNum === ""){
      rightNum = 0;
    }
    else{
      rightNum = parseInt(rightNum);
    }
    $('#total').val(leftNum+rightNum);
  });
})
