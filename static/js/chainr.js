$(document).ready(function() {
  // Get access to canvas in HTML file
  var canvas = document.getElementById('game_canvas');
  var context = canvas.getContext('2d');
  var width = canvas.width;
  var height = canvas.height;

  // PUT STUFF HERE

  // Run an interation of the game
var balls = []; 
numBalls = 10
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
var reacting = false 
var numReacted = 0
var gameState = 'menu'
var menuText = "Click to Play!"


  var updateGame = function() {
    context.strokeStyle='white';
    context.fillStyle='white';
    context.strokeRect(0, 0, 800, 600);
    context.fillRect(0, 0, 800, 600);
    if (gameState === 'menu') {
      context.fillStyle = 'lightgreen';
      context.font = "50px Comic Sans"; 
      context.fillText(menuText, 50, 300);
    }
    else if (gameState === 'playing') {
    
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
    reactions[i].timer = reactions[i].timer + 1 
    if (reactions[i].timer > 200) {
      reactions[i].radius = reactions[i].radius - 1
     if (reactions[i].radius === 0 ) {
        reactions.splice(i, 1); 
            i = i - 1; } }
    else if (reactions[i].radius < 30) {
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

  for (var i = 0; i < balls.length; i++) {
    var collided = false 
        for (var j = 0; j < reactions.length; j++) {
                var xdiff = balls[i].x_above - reactions[j].x_above;
                var ydiff = balls[i].y_above - reactions[j].y_above;
                var dist = Math.sqrt(xdiff*xdiff + ydiff*ydiff);
          if (dist < balls[i].radius + reactions[j].radius) {
            collided = true; 
          }   
        }   
        if (collided === true) {
            var c = {
              x_above: balls[i].x_above,
              y_above: balls[i].y_above,
              radius: 1,
              timer:0
            };
            reactions.push(c); 
            balls.splice(i, 1); 
            i = i - 1;  
            numReacted = numReacted + 1;  
        }
      }
       context.fillStyle = "lightgreen"; 
    context.font = "20px Comic Sans";
    context.fillText('Reactions:' + numReacted , 1, 50);
    }
  if ( reacting === true && reactions.length === 0) {
    menuText = 'Game Over:  You Reacted ' + numReacted + ' balls!';
    gameState = 'menu';
  } 

    requestAnimationFrame(updateGame);
    //PUT STUFF HERE
    
  }
 



  // Handle a canvas click event
  $('#game_canvas').click(function(e) {
    if (gameState === 'menu') {
      gameState = 'playing'
      reacting = false
      numReacted = 0
      balls = []
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
    }
  else if (reacting === false && gameState === 'playing') {
    // Find the mouse x and y relative to the top-left corner of the canvas
    var x = e.pageX - $(this).offset().left;
    var y = e.pageY - $(this).offset().top;
  var b = {
  x_above: x,
  y_above: y,
  radius: 1,
  vy: 10*Math.random(),
  vx: 10*Math.random(),
  timer: 0
};
reactions.push(b);
reacting = true 
 } 


    // PUT STUFF HERE
  });

  updateGame();
});
