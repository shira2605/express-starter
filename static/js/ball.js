$(document).ready(function() {
  //initialize canvas
  var canvas = document.getElementById("canvas");
  var context = canvas.getContext("2d");
  var width = canvas.width;
  var height = canvas.height;

  //PUT STUFF HERE

  //run an iteration of the game
var x_above = 20

  var updateGame = function() {
    x_above = x_above + 5
    context.strokeStyle='white';
    context.fillStyle='white';
    context.strokeRect(0, 0, 800, 600);
    context.fillRect(0, 0, 800, 600);
    context.beginPath();
    context.strokeStyle='pink';
    context.fillStyle='pink';
    context.arc(x_above, 20, 20, 0, 2*Math.PI);
    context.closePath();
    context.fill()
    setTimeout(updateGame, 10);
    //PUT STUFF HERE
  };

  updateGame();
});
