export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","logo.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.7ebc5b23.js","imports":["_app/immutable/entry/start.7ebc5b23.js","_app/immutable/chunks/index.f99c9f29.js","_app/immutable/chunks/singletons.9a17b966.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.a7fa793e.js","imports":["_app/immutable/entry/app.a7fa793e.js","_app/immutable/chunks/index.f99c9f29.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js'),
			() => import('./nodes/7.js'),
			() => import('./nodes/8.js'),
			() => import('./nodes/9.js'),
			() => import('./nodes/10.js'),
			() => import('./nodes/11.js'),
			() => import('./nodes/12.js'),
			() => import('./nodes/13.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 7 },
				endpoint: null
			},
			{
				id: "/signup",
				pattern: /^\/signup\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 13 },
				endpoint: null
			},
			{
				id: "/[slug]/projects",
				pattern: /^\/([^/]+?)\/projects\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2], errors: [1,,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/[slug]/projects/new",
				pattern: /^\/([^/]+?)\/projects\/new\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,6], errors: [1,,,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/[slug]/projects/[slug]/applications",
				pattern: /^\/([^/]+?)\/projects\/([^/]+?)\/applications\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false},{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,3], errors: [1,,,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/[slug]/projects/[slug]/applications/new",
				pattern: /^\/([^/]+?)\/projects\/([^/]+?)\/applications\/new\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false},{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,3,5], errors: [1,,,,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/[slug]/projects/[slug]/applications/[slug2]",
				pattern: /^\/([^/]+?)\/projects\/([^/]+?)\/applications\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false},{"name":"slug","optional":false,"rest":false,"chained":false},{"name":"slug2","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,3,4], errors: [1,,,,], leaf: 10 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
