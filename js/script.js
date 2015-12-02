$(function() {
	$(".top-decor").fadeTo(0, 0);
	$("#slogan-text").fadeTo(0, 0);

	topEffect();

	if (isRetinaDisplay()) {
		$.each($(".works-image"), function(index, el) {
			var imgsrc = $(el).attr("src");
			var newsrc = imgsrc.slice(0, imgsrc.length - 4) + "@2x" + imgsrc.slice(imgsrc.length - 4);
			$(el).attr("src", newsrc);
		});
	};

	function topEffect() {
		$.each($(".top-decor"), function(index, el) {
			window.setTimeout(function() {
				$(el).addClass("top-in");
			}, Math.random()*(700 - 400) + 400);
		});

		$("#slogan-text").delay(700).fadeTo(700, 1);
	}

	function isRetina(){
	    return ((window.matchMedia && (window.matchMedia('only screen and (min-resolution: 192dpi), only screen and (min-resolution: 2dppx), only screen and (min-resolution: 75.6dpcm)').matches || window.matchMedia('only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: 2/1), only screen and (min--moz-device-pixel-ratio: 2), only screen and (min-device-pixel-ratio: 2)').matches)) || (window.devicePixelRatio && window.devicePixelRatio >= 2)) && /(iPad|iPhone|iPod)/g.test(navigator.userAgent);
	}

	function isRetinaDisplay() {
        if (window.matchMedia) {
            var mq = window.matchMedia("only screen and (min--moz-device-pixel-ratio: 1.3), only screen and (-o-min-device-pixel-ratio: 2.6/2), only screen and (-webkit-min-device-pixel-ratio: 1.3), only screen  and (min-device-pixel-ratio: 1.3), only screen and (min-resolution: 1.3dppx)");
            return (mq && mq.matches || (window.devicePixelRatio > 1)); 
        }
    }
});