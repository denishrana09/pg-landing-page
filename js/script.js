//fixed-top bg-dark
$(document).ready(function () {

	/* For the sticky navigation */
	$('.features-section').waypoint(function (direction) {
		if (direction == "down") {
			$('nav').addClass('bg-dark fixed-top');
		} else {
			$('nav').removeClass('bg-dark fixed-top');
		}
	},
		{
			offset: '100px;'
		});

	$('.js--scroll-to-plans').click(function () {
		$('html, body').animate({ scrollTop: $('.customer-contact').offset().top - 60 }, 700);
	});

	$('.js--scroll-to-start').click(function () {
		$('html, body').animate({ scrollTop: $('.features-section').offset().top - 60 }, 700);
	});

	$(function () {
		$('a[href*=\\#]:not([href=\\#])').click(function () {
			if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				if (target.length) {
					$('html,body').animate({
						scrollTop: target.offset().top - 70
					}, 700);
					return false;
				}
			}
		});
	});

});