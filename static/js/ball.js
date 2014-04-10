$(document).ready(function() {
  //initialize canvas
  var canvas = document.getElementById("canvas");
  var context = canvas.getContext("2d");
  var width = canvas.width;
  var height = canvas.height;

  //PUT STUFF HERE

  //run an iteration of the game
var ball = {
  x_above: 20,
  y_above: 20,
  radius: 20,
  vy: 5,
  vx: 5,

};

  var updateGame = function() {
    ball.x_above = ball.x_above + ball.vx
    ball.y_above = ball.y_above + ball.vy
    context.strokeStyle='white';
    context.fillStyle='white';
    context.strokeRect(0, 0, 800, 600);
    context.fillRect(0, 0, 800, 600);
    context.beginPath();
    context.strokeStyle='pink';
    context.fillStyle='pink';
    context.arc(ball.x_above, ball.y_above, ball.radius, 0, 2*Math.PI);
    context.closePath();
    context.fill()
    if (ball.vy > 0 && ball.y_above >= 600) {
      ball.vy = -5;
    }
    if (ball.vx > 0 && ball.x_above >= 800) {
      ball.vx = -5;
    }
    if (ball.vy < 0 && ball.y_above <= 0) {
      ball.vy = 5;
    }
    if (ball.vx < 0 && ball.x_above <= 0) {
      ball.vx = 5;
    }

    setTimeout(updateGame, 10);
    //PUT STUFF HERE
  };

  updateGame();
});
