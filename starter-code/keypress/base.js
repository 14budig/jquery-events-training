console.log("Sanity Check: JS is working!");

$(document).ready(function(){
  var counting = false;
  var startTime;
  var totalTime;
  $('body').keyup(function(e){
   if(e.keyCode == 32){
     if(counting){
       counting = false;
       totalTime = Date.now() - startTime;
       console.log(totalTime);
       var seconds = totalTime/1000;
       $('span').html(seconds + " seconds");
     }
     else{
       counting = true;
       startTime = Date.now();
     }
   }
});
})
