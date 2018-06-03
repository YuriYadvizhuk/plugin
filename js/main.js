// /*
// 	Visualize by TEMPLATED
// 	templated.co @templatedco
// 	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
// */

// $(function() {

// 	// Vars.
// 		var	$window = $(window),
// 			$body = $('body'),
// 			$wrapper = $('#wrapper');

// 	// Breakpoints.
// 		skel.breakpoints({
// 			xlarge:	'(max-width: 1680px)',
// 			large:	'(max-width: 1280px)',
// 			medium:	'(max-width: 980px)',
// 			small:	'(max-width: 736px)',
// 			xsmall:	'(max-width: 480px)'
// 		});

// 	// Disable animations/transitions until everything's loaded.
// 		$body.addClass('is-loading');

// 		$window.on('load', function() {
// 			$body.removeClass('is-loading');
// 		});

// 	// // Poptrox.
// 	// 	$window.on('load', function() {

// 	// 		$('.thumbnails').poptrox({
// 	// 			onPopupClose: function() { $body.removeClass('is-covered'); },
// 	// 			onPopupOpen: function() { $body.addClass('is-covered'); },
// 	// 			baseZIndex: 10001,
// 	// 			useBodyOverflow: false,
// 	// 			usePopupEasyClose: true,
// 	// 			overlayColor: '#000000',
// 	// 			overlayOpacity: 0.75,
// 	// 			popupLoaderText: '',
// 	// 			fadeSpeed: 500,
// 	// 			usePopupDefaultStyling: false,
// 	// 			windowMargin: (skel.breakpoint('small').active ? 5 : 50)
// 	// 		});

// 	// 	});

// });


// init Isotope
var $grid =  $('.grid').isotope({
  getSortData: {
    name: '.name',

    weight: function( itemElem ) {
      var weight = $( itemElem ).find('.weight').text();
      return parseFloat( weight.replace( /[\(\)]/g, '') );
    }
  }
});

// sort items on button click
$('.sort-by-button-group').on( 'click', 'button', function() {
  var sortByValue = $(this).attr('data-sort-by');
  $grid.isotope({ sortBy: sortByValue });
});

// external js: isotope.pkgd.js

// init Isotope
var $grid = $('.grid').isotope({
  itemSelector: '.element-item',

});
// filter functions
var filterFns = {
  // show if number is greater than 50
  // numberGreaterThan50: function() {
  //   var number = $(this).find('.number').text();
  //   return parseInt( number, 10 ) > 50;
  // },

  // // show if name ends with -ium
  // ium: function() {
  //   var name = $(this).find('.name').text();
  //   return name.match( /ium$/ );
  // }
};

// bind filter button click
$('.filters-button-group').on( 'click', 'button', function() {
  var filterValue = $( this ).attr('data-filter');
  // use filterFn if matches value
  filterValue = filterFns[ filterValue ] || filterValue;
  $grid.isotope({ filter: filterValue });
});
// change is-checked class on buttons
$('.button-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});



