$(function() {

// my-menu
	$('#my-menu').mmenu({
		extensions: [ 'theme-dark', 'fx-listitems-slide', 'pagedim-black' ],
		navbar: {
			title: 'investor<strong>agency</strong>'
		},
		offCanvas: {
			position: 'right'
		},
		onClick: {
			close: true
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

// equal-height
	function setEqualHeight(columns) {
	var tallestcolumn = 0;
	columns.each(function() {
	currentHeight = $(this).height();
	if(currentHeight > tallestcolumn) {
		tallestcolumn  = currentHeight;
	}
	});
	columns.height(tallestcolumn);
	}
	setEqualHeight($('.services-item, .i-footer-left, .i-footer-right'));

// selectize
	$('select').selectize();

// smooth-scroling
	// Select all links with hashes
	$('a[href*="#"]')
	  // Remove links that don't actually link to anything
	  .not('[href="#"]')
	  .not('[href="#0"]')
	  .click(function(event) {
	    // On-page links
	    if (
	      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
	      && 
	      location.hostname == this.hostname
	    ) {
	      // Figure out element to scroll to
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
	      // Does a scroll target exist?
	      if (target.length) {
	        // Only prevent default if animation is actually gonna happen
	        event.preventDefault();
	        $('html, body').animate({
	          scrollTop: target.offset().top
	        }, 1000, function() {
	          // Callback after animation
	          // Must change focus!
	          var $target = $(target);
	          $target.focus();
	          if ($target.is(":focus")) { // Checking if the target was focused
	            return false;
	          } else {
	            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
	            $target.focus(); // Set focus again
	          };
	        });
	      }
	    }
	  });

});