$.fn.animateRotate = function(angle, duration, easing, complete) {
  var args = $.speed(duration, easing, complete);
  var step = args.step;
  return this.each(function(i, e) {
    args.complete = $.proxy(args.complete, e);
    args.step = function(now) {
      $.style(e, 'transform', 'rotate(' + now + 'deg)');
      $.style(e, 'transform-origin', '50% 65%');
      if (step) return step.apply(e, arguments);
    };

    $({deg: 0}).animate({deg: angle}, args);
  });
};


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

	$(".challenge-relative-wrapper").hover(function() {
		$("#hangover-plus").animateRotate(90, 700);
	}, function() {
		$("#hangover-plus").animateRotate(0, 600);
	});

	function topEffect() {
		$.each($(".top-decor"), function(index, el) {
			window.setTimeout(function() {
				$(el).addClass("top-in");
			}, Math.random()*(700 - 400) + 400);
		});

		$("#slogan-text").delay(700).fadeTo(700, 1);
	}

	function isRetinaDisplay() {
        if (window.matchMedia) {
            var mq = window.matchMedia("only screen and (min--moz-device-pixel-ratio: 1.3), only screen and (-o-min-device-pixel-ratio: 2.6/2), only screen and (-webkit-min-device-pixel-ratio: 1.3), only screen  and (min-device-pixel-ratio: 1.3), only screen and (min-resolution: 1.3dppx)");
            return (mq && mq.matches || (window.devicePixelRatio > 1)); 
        }
    }
});