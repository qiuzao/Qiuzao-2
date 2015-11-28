$(function() {
	$(".top-decor").fadeTo(0, 0);
	$("#slogan-text").fadeTo(0, 0);

	topEffect();

	function topEffect() {
		$.each($(".top-decor"), function(index, el) {
			window.setTimeout(function() {
				$(el).addClass("top-in");
			}, Math.random()*(700 - 400) + 400);
		});

		$("#slogan-text").delay(700).fadeTo(700, 1);
	}
});