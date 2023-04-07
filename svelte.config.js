import adapter from '@sveltejs/adapter-node';
// import adapter from '@sveltejs/adapter-netlify';

export default {
	kit: {
		adapter: adapter({
			edge: false,
			split: false
		}),
		csrf: {
			checkOrigin: false,
		}
	},
};
