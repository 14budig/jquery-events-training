console.log("Sanity Check: JS is working!");

$(document).ready(function(){

  $("#time").text( Date.now() );

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
