// Problem 2 (Peekaboo) ------------------------------------------------------
// WRITE CODE HERE

// Problem 3 (Swap Em) -----------------------------------------------
// WRITE CODE HERE

// Problem 4 (Find the Source) -------------------------------------------------
$('.clickable').click(function() {
});


$('#toggle_img').click(function() {
  	if ($('#toggle_img').text()=='Come Back!'){
    	$('#main_img').show();
    	$('#toggle_img').text('Go Away!');
	} 
	else {
    	$('#main_img').hide();
  		$('#toggle_img').text('Come Back!');
	}
});

$('#change_img').click(function() {
	alert('/static/img/'+ $('#new_img_file').val());
	$('#main_img').attr('src', ('/static/img/') + $('#new_img_file').val())
});

