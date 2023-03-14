// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-netlify';

export default {
	kit: {
		adapter: adapter({
			edge: false,
			split: false
		})
	}
};
