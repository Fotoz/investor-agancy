$(function() {

// my-menu
	$('#my-menu').mmenu({
		extensions: [ 'theme-dark', 'fx-listitems-slide', 'pagedim-black' ],
		navbar: {
			title: 'investor<strong>agency</strong>'
		},
		offCanvas: {
			position: 'right'
		}
	});

// hamburger
	var api = $('#my-menu').data('mmenu');
	api.bind('open:finish', function() {
		$('.hamburger').addClass('is-active');
	});
	api.bind('close:finish', function() {
		$('.hamburger').removeClass('is-active');
	});

//smooth-scroling
    // var $page = $('html, body');
    //     $('a[href*="#"]').click(function() {
    //         $page.animate({
    //             scrollTop: $($.attr(this, 'href')).offset().top
    //         }, 800);
    //         return false;
    // });

});