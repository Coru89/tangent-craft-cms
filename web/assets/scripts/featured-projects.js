var grid=document.querySelector(".featured-projects__grid"),filters={},filterFns={},iso=new Isotope(grid,{itemSelector:".featured-projects__item",layoutMode:"masonry",filter:function(e){var t,r=!0;for(t in filters){var i=filters[t];if((i=filterFns[i]||i)&&"function"==typeof i?r=i(e):i&&(r=e.matches(i)),!r)break}return r}}),elFilters=document.querySelector(".featured-projects__filters"),elButtons=document.querySelectorAll(".featured-projects__filters-link");elFilters&&elFilters.addEventListener("click",function(e){var t;e.target&&!e.target.matches("button")||(elButtons.forEach(function(e){e.classList.contains("featured-projects__filters-link--active")&&e.classList.remove("featured-projects__filters-link--active")}),e.target.classList.add("featured-projects__filters-link--active"),t=e.target.getAttribute("data-filter-group"),filters[t]=e.target.getAttribute("data-filter"),iso.arrange({}))});