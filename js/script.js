$(function() {
	$(".top-decor").fadeTo(0, 0);
	$("#slogan-text").fadeTo(0, 0);

	window.setTimeout(topEffect, 700)


	function topEffect() {
		$.each($(".top-decor"), function(index, el) {
			$(el).delay(700).addClass("top-in");
		});

		$("#slogan-text").delay(700).fadeTo(500, 1);
	}
});