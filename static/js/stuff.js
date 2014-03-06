alert('Welcome, Bienvenido!'); // edit me!

// Problem 1 (Say Hello!) ---------------------------------------------------
$('#say_hello').click(function() {
	alert('Hello world!');
  // WRITE CODE HERE
});


// Problem 2 (Houdini) ------------------------------------------------------
$('#disappear').click(function() {
  $('#houdini_text').hide();
});

$('#reappear').click(function() {
  $('#houdini_text').show();
});

$('#color').click(function() {
	$('#makepink').css('color','pink');
});


$('#greet').click(function() {
	alert('Hello '+ $('#my_name').val());
});



// Problem 4 (Greet Me) -----------------------------------------------------
// WRITE CODE HERE
