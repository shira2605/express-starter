$(document).ready(function() {
  // Get access to canvas in HTML file
  var canvas = document.getElementById('game_canvas');
  var context = canvas.getContext('2d');
  var width = canvas.width;
  var height = canvas.height;

  // PUT STUFF HERE

  // Run an interation of the game
var balls = []; 
numBalls = 3
for (var i = 0; i< numBalls; i++) {
var b = {
  x_above: 100,
  y_above: 20,
  radius: 20,
  vy: 10*Math.random(),
  vx: 10*Math.random(),
};
balls.push(b);
} 
reactions = []; 

  var updateGame = function() {
    context.strokeStyle='white';
    context.fillStyle='white';
    context.strokeRect(0, 0, 800, 600);
    context.fillRect(0, 0, 800, 600);
    for (var i = 0; i < balls.length; i++) {
    balls[i].x_above = balls[i].x_above + balls[i].vx
    balls[i].y_above = balls[i].y_above + balls[i].vy
    context.beginPath();
    context.strokeStyle='lightblue';
    context.fillStyle='lightblue';
    context.arc(balls[i].x_above, balls[i].y_above, balls[i].radius, 0, 2*Math.PI);
    context.closePath();
    context.fill()
    if (balls[i].vy > 0 && balls[i].y_above >= 600) {
      balls[i].vy = -5;
    }
    if (balls[i].vx > 0 && balls[i].x_above >= 800) {
      balls[i].vx = -5;
    }
    if (balls[i].vy < 0 && balls[i].y_above <= 0) {
      balls[i].vy = 5;
    }
    if (balls[i].vx < 0 && balls[i].x_above <= 0) {
      balls[i].vx = 5;
    }
  }
  for (var i = 0; i< reactions.length; i++) {
    if (reactions[i].radius < 30) {
      reactions[i].radius = reactions[i].radius + 1; 
    }
}

  for (var i = 0; i < reactions.length; i++) {
    context.beginPath();
    context.strokeStyle='pink';
    context.fillStyle='pink';
    context.arc(reactions[i].x_above, reactions[i].y_above, reactions[i].radius, 0, 2*Math.PI);
    context.closePath();
    context.fill()
  }
    requestAnimationFrame(updateGame);
    //PUT STUFF HERE
  };
 



  // Handle a canvas click event
  $('#game_canvas').click(function(e) {
       // Find the mouse x and y relative to the top-left corner of the canvas
    var x = e.pageX - $(this).offset().left;
    var y = e.pageY - $(this).offset().top;
  var b = {
  x_above: x,
  y_above: y,
  radius: 1,
  vy: 10*Math.random(),
  vx: 10*Math.random(),
};
reactions.push(b);

    // PUT STUFF HERE
  });

  updateGame();
});
