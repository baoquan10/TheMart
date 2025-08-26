// Component Loader: Dynamically loads HTML components into matching elements by ID
// Assumes component HTML files are in the 'templates' folder and named as <id>.html

document.addEventListener('DOMContentLoaded', () => {
	const componentIds = [
		'header',
		'hero_section',
		'promo_cards_section',
		'best_sellers_section',
		'cards_section',
		'call_to_action_section',
		'footer'
	];

	componentIds.forEach(id => {
		const el = document.getElementById(id);
		if (el) {
			fetch(`/component/${id}`)
				.then(response => {
					if (!response.ok) throw new Error(`Failed to load ${id}`);
					return response.text();
				})
				.then(html => {
					el.innerHTML = html;
				})
				.catch(err => {
					console.error(`ComponentLoader: ${err.message}`);
				});
		}
	});
});
