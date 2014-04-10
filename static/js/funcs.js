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

  var drawTriplet = function(x, y, color) {
    drawCircle(x, y, 50, color);
    drawCircle(x-30, y+50, 50, color);
    drawCircle(x+30, y+50, 50, color);
  };

var drawTriangle = function(x, y, sideLen, color) {
  context.beginPath();
  context.strokeStyle=color;
  context.fillStyle=color;
  context.moveTo(x, y);
  context.lineTo(x+30, y+50);
  context.lineTo(x-30, y+50);
  context.closePath();
  context.stroke();
  context.fill();
};

var drawTriforce = function(x, y, color) {
  context.beginPath();
  context.strokeStyle= black
}




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

  });

  $('#p6').click(function() {
    drawTriplet(100, 80, 'green');
  })

  $('#p7').click(function() {
    drawTriplet(315, 80, 'blue');
  })

  $('#p8').click(function() {
    drawTriplet(100, 80, 'springgreen');
    drawTriplet(315, 80, 'aqua');
    drawTriplet(100, 300, 'magenta');
    drawTriplet(315, 300, 'mediumvioletred');

  })

$('#p9').click(function() {
  drawTriangle(50, 60, 200, 'pink'); 
})
  //---------------------------------------------------------------------------
  //Write your code for p5-p11 here
  //

});
