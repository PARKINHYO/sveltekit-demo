import adapter from '@sveltejs/adapter-node';

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
