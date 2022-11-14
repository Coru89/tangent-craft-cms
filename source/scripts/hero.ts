window.onload = function() {
	const heroBackgroundEl: HTMLElement = document.querySelector('.hero--with-background');
	
	if (!heroBackgroundEl) {
		return;
	}

	const heroTextEl: HTMLElement = document.querySelector('.hero__text');
	applyHeroMargin();

	function applyHeroMargin() {
		if (!heroTextEl || !heroBackgroundEl) {
			return;
		}

		const margin = heroTextEl.offsetHeight / 2;
		heroBackgroundEl.style.marginBottom = `${margin}px`;
	}
	
	if (document.documentElement.clientWidth < 768) {
		window.addEventListener('resize', applyHeroMargin);
	}
}