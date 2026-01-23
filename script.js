
document.addEventListener('DOMContentLoaded', () => {
	// Highlight active nav link based on current page
	const currentPath = window.location.pathname.split('/').pop() || 'index.html';
	document.querySelectorAll('.main-menu a').forEach(link => {
		const href = link.getAttribute('href');
		if (href === currentPath) {
			link.classList.add('active-link');
		}
	});

	// Scroll-reveal for sections and cards
	const revealTargets = document.querySelectorAll(
		'#about, #services, #learning-path, #portfolios, #social-media, .service, .portfolio'
	);

	if ('IntersectionObserver' in window) {
		const observer = new IntersectionObserver(
			(entries, obs) => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						entry.target.classList.add('reveal-visible');
						obs.unobserve(entry.target);
					}
				});
			},
			{
				threshold: 0.2,
			}
		);

		revealTargets.forEach(el => {
			el.classList.add('reveal');
			observer.observe(el);
		});
	} else {
		// Fallback: make everything visible if IntersectionObserver is not supported
		revealTargets.forEach(el => {
			el.classList.add('reveal-visible');
		});
	}

	// Back to top button behaviour
	const backToTopBtn = document.getElementById('back-to-top');
	if (backToTopBtn) {
		const toggleBackToTop = () => {
			if (window.scrollY > 300) {
				backToTopBtn.classList.add('show');
			} else {
				backToTopBtn.classList.remove('show');
			}
		};

		window.addEventListener('scroll', toggleBackToTop);
		toggleBackToTop();

		backToTopBtn.addEventListener('click', () => {
			window.scrollTo({ top: 0, behavior: 'smooth' });
		});
	}
});

