$(document).ready(function() {
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext("2d");

  $('#clear').click(function() {
    context.clearRect(0, 0, canvas.width, canvas.height);
  });

 

  //---------------------------------------------------------------------------
  //Write your code for p1-p12 here
 $('#p1').click(function() {
    context.strokeRect(10, 10, 200, 400);
});

 $('#p2').click(function() {
    context.strokeRect(10, 10, 200, 200);
});


});


