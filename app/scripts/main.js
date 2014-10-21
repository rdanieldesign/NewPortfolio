'use strict';
$(document).ready(function(){
	$('#hamburger').click(function(){
		$(this).toggleClass('active');
		$('nav ul').toggleClass('active');
	});
});
