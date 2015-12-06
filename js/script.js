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

$.fn.visible = function(partial) {

    var $t            = $(this),
      $w            = $(window),
      viewTop       = $w.scrollTop(),
      viewBottom    = viewTop + $w.height(),
      _top          = $t.offset().top,
      _bottom       = _top + $t.height(),
      compareTop    = partial === true ? _bottom : _top,
      compareBottom = partial === true ? _top : _bottom;

    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
};


$(function() {
	topEffect();

	if (isRetinaDisplay()) {
		$.each($(".works-image"), function(index, el) {
			var imgsrc = $(el).attr("src");
			var newsrc = imgsrc.slice(0, imgsrc.length - 4) + "@2x" + imgsrc.slice(imgsrc.length - 4);
			$(el).attr("src", newsrc);
		});
	};

	// rotate the "+" sign in weekly challenges section when hovering
	$(".challenge-relative-wrapper").hover(function() {
		$("#hangover-plus").animateRotate(90, 700);
	}, function() {
		$("#hangover-plus").animateRotate(0, 600);
	});

	$(window).scroll(function(event) {
		// move in work units of the same row in sequence
		var works = $(".works-unit");
		var delay = 0;
		var lastTop = -999;
		for (var i = 0; i < works.length; i++) {
			var el = $(works[i]);
			
			if (el.visible(true)) {
				// check if it's in the same row
				if (el.position().top == lastTop) {
					delay += 200;
				} else {
					delay = 0;
				}

				window.setTimeout(function(e) {
					return function() {
						e.addClass("bottom-in");
					};
				}(el), delay);
				
			}
			lastTop = el.position().top;
		};

		// ghost moves
		var orangeGhost = $(".monster-orange");
		if (orangeGhost.visible(true)) {
			orangeGhost.addClass("left-in");
		};
		var blueGhost = $(".monster-blue");
		if (blueGhost.visible(true)) {
			blueGhost.addClass("right-in");
		};
		var greenGhost = $(".monster-green");
		if (greenGhost.visible(true)) {
			greenGhost.addClass("right-in-2");
		};
	});

	// emit a trigger event to load bottom in blocks
	$(window).trigger("scroll");

	function topEffect() {
		$(".top-decor").fadeTo(0, 0);
	 	$("#slogan-text").fadeTo(0, 0);

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