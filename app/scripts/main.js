'use strict';
$(document).ready(function(){

	// Navigation toggle
	$('#hamburger').click(function(){
		$(this).toggleClass('active');
		$('nav ul').toggleClass('active');
	});

});

