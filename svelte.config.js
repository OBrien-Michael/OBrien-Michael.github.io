import adapter from '@sveltejs/adapter-static';

const config = {
	kit: {
		adapter: adapter({
			// Default options are fine for GitHub Pages
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			precompress: false,
			strict: true
		})
		// No base path needed for username.github.io repositories
	}
};

export default config;
