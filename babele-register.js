Hooks.once('init', () => {

	if(typeof Babele !== 'undefined') {

		Babele.get().register({
			module: 'wfrp4e-core-es',
			lang: 'es',
			dir: 'compendium'
		});
	}
});