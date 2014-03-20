$(document).ready(function() {
  //this is how we acquire control of the canvas
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext("2d");

  $('#clear').click(function() {
    context.clearRect(0, 0, canvas.width, canvas.height);
  });

  var drawSquare = function(x, y, sideLen, color) {
      context.strokeStyle= color;
      context.strokeRect(x, y, sideLen, sideLen);
  };

  var drawCircle = function(x, y, radius, color) {
    context.beginPath();
    context.strokeStyle=color;
    context.arc(x, y, radius, 0, 2*Math.PI);
    context.closePath();
    context.stroke();
    // Write circle drawing code here
    // Delete the alert when done
  };

  // Write drawTriplet function here

  // Challenge:
  // Write drawTriangle, drawTriforce, drawTripleTriforce,
  // drawSierpinski functions here

  $('#p1').click(function() {
    drawSquare(100, 200, 50, 'blue');
  });

  $('#p2').click(function() {
    drawSquare(300, 100, 25, 'green');
  });

  $('#p3').click(function() {
    drawCircle(100, 200, 50, 'red');
  });

  $('#p4').click(function() {
    drawCircle(300, 100, 25, 'black');
  });

  $('#p5').click(function() {
    drawSquare(150, 150, 200, 'red');
    drawCircle(250, 250, 99, 'blue');
    drawCircle(250, 150, 99, 'green');
    drawCircle(250, 350, 99, 'green');
    drawCircle(150, 250, 99, 'green');
    drawCircle(350, 250, 99, 'green');

  })

  //---------------------------------------------------------------------------
  //Write your code for p5-p11 here
  //

});
