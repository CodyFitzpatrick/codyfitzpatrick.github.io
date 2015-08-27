$(function () {
	var count = 0;
	$("#social-btn").click(function () {
		if(count % 2 === 0) {
			$("#social-bar").fadeIn();
			$('html, body').animate({
		        scrollTop: $("#social-bar").offset().top
		    }, 2000);
			++count;
		} else {
			$("#social-bar").fadeOut();
			++count;
		}
	});
});