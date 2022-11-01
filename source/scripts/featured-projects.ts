// //var Isotope = require('isotope-layout');
// //import Isotope from './../../node_modules/isotope-layout/dist/isotope.pkgd.js';

// const grid = document.querySelector('.featured-projects__grid');

// // store filter for each group
// var filters = {};

// var filterFns = {
// };

// var iso = new Isotope( grid, {
// 	// options...
// 	itemSelector: '.featured-projects__item',
// 	layoutMode: 'masonry',
// 	filter: function( itemElem ) {

// 	 	var isMatched = true;
	
// 	 	for ( var prop in filters ) {
// 	 	  var filter = filters[ prop ];
// 	 	  // use function if it matches
// 	 	  filter = filterFns[ filter ] || filter;
// 	 	  // test each filter
// 	 	  var filterType = typeof filter;
// 		  if ( filter && filterType == 'function' ) {
// 	 		isMatched = filter( itemElem );
// 	 	  } else if ( filter ) {
// 	 		isMatched = itemElem.matches(filter);
// 	 	  }
// 	 	  // break if not matched
// 	 	  if ( !isMatched ) {
// 	 		break;
// 	 	  }
// 	 	}
// 	 	return isMatched;
// 	   }
// });

// const elFilters: any = document.querySelector('.featured-projects__filters');
// const elButtons = document.querySelectorAll('.featured-projects__filters-link');

// if (elFilters) {
// 	elFilters.addEventListener( 'click', function( event ) {
// 		// only work with buttons
// 		if (event.target && !event.target.matches('button')) {
// 		  return;
// 		}

// 		// remove active stlye class on filter controls
// 		elButtons.forEach(element => {
// 			if (element.classList.contains("featured-projects__filters-link--active")) {
// 				element.classList.remove("featured-projects__filters-link--active");
// 			}
// 		});

// 		// add active style to filter
// 		event.target.classList.add("featured-projects__filters-link--active");


// 		var filterGroup = event.target.getAttribute('data-filter-group');
// 		// set filter for group
// 		filters[ filterGroup ] = event.target.getAttribute('data-filter');
// 		// arrange, and use filter fn
// 		iso.arrange({});
// 	  });
// }

// // change is-checked class on buttons
// // var buttonGroups = document.querySelectorAll('.button-group');
// // for ( var i=0; i < buttonGroups.length; i++ ) {
// // 	var buttonGroup = buttonGroups[i];
// // }
  