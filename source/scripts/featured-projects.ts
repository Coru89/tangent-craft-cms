///  <reference types="/web/assets/scripts/vendor/isotope.d.ts"></reference>

const grid: HTMLElement = document.querySelector('.featured-projects__grid');

var iso = new Isotope(grid, {
	// options...
	itemSelector: '.featured-projects__item',
	layoutMode: 'masonry'
});

const elFilters: any = document.querySelector('.featured-projects__filters');
const elButtons = document.querySelectorAll('.featured-projects__filters-link');

if (elFilters) {
	elFilters.addEventListener( 'click', function( event: any ) {
		// only work with buttons
		if (event.target && !event.target.matches('button')) {
		  return;
		}

		// remove active stlye class on filter controls
		elButtons.forEach(element => {
			if (element.classList.contains("featured-projects__filters-link--active")) {
				element.classList.remove("featured-projects__filters-link--active");
			}
		});

		// add active style to filter
		event.target.classList.add("featured-projects__filters-link--active");

		const filterValue = event.target.getAttribute('data-filter');
		iso.arrange({ filter: filterValue });
	  });
}
