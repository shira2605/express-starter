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

 
$('#p3').click(function() {
	context.beginPath(); 
	context.arc(100, 100, 100, 0, Math.PI);
	context.closePath();
	context.stroke()
});


$('#p4').click(function() {
	context.beginPath();
	context.arc(150, 150, 100, 0, 2*Math.PI);
	context.closePath();
	context.stroke()
});

$('#p5').click(function() {
	context.beginPath();
	context.moveTo(50, 50);
	context.lineTo(283, 370);
	context.closePath();
	context.stroke();
});

 $('#p6').click(function() {
 	context.strokeStyle ='green';
    context.strokeRect(10, 10, 200, 400);
});

$('#p7').click(function() {
	context.beginPath();
	context.strokeStyle='red';
	context.fillStyle='red';
	context.arc(150, 150, 100, 0, 2*Math.PI);
	context.closePath();
	context.fill();

});

 $('#p8').click(function() {
    context.strokeStyle='blue';
    context.fillStyle='yellow';
    context.strokeRect(10, 10, 200, 200);
    context.fillRect(10, 10, 200, 200);
});

$('#p9').click(function() {
	for (var i = 1; i <= 5; i++) {
        context.strokeRect(i*50, 50, 50, 50);
}
});

$('#p10').click(function() {
	for (var i = 1; i <= 100; i++) {
		context.strokeRect(i*5, 5, 5, 5);
}
});

$('#p11').click(function() {
	for (var i = 1; i <= 100; i++) {
		for (var j = 1; j<= 100; j++) {
			context.strokeRect(i*5, j*5, 5, 5);
		}
	}
		});

$('#p12').click(function() {
	for (var i = 1; i<= 20; i++) {
	context.beginPath();
	context.arc(200, 200, i*10, 0, 2*Math.PI);
	context.closePath();
	context.stroke();
}
});

});


