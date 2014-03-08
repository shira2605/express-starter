
$('.clickable').click(function() {
	alert($('.clickable').attr('src'));
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

$('#img2').click(function() {
	$('#img1').attr('src', ('/static/img') + $('#img2'))
});

$('#img3').click(function() {
	$('#img1').attr('src', ('/static/img') + $('#img3'))
});

$('#img4').click(function() {
	$('#img1').attr('src', ('/static/img') + $('#img4'))
});

