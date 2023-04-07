import { init } from '../serverless.js';

export const handler = init({
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","logo.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.db3d6866.js","imports":["_app/immutable/entry/start.db3d6866.js","_app/immutable/chunks/index.9cf3cee8.js","_app/immutable/chunks/singletons.f392b12c.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.3dbb1b71.js","imports":["_app/immutable/entry/app.3dbb1b71.js","_app/immutable/chunks/index.9cf3cee8.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('../server/nodes/0.js'),
			() => import('../server/nodes/1.js'),
			() => import('../server/nodes/2.js'),
			() => import('../server/nodes/3.js'),
			() => import('../server/nodes/4.js'),
			() => import('../server/nodes/5.js'),
			() => import('../server/nodes/6.js'),
			() => import('../server/nodes/7.js'),
			() => import('../server/nodes/8.js'),
			() => import('../server/nodes/9.js'),
			() => import('../server/nodes/10.js'),
			() => import('../server/nodes/11.js'),
			() => import('../server/nodes/12.js'),
			() => import('../server/nodes/13.js'),
			() => import('../server/nodes/14.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 8 },
				endpoint: null
			},
			{
				id: "/signup",
				pattern: /^\/signup\/?$/,
				params: [],
				page: { layouts: [0,7], errors: [1,,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/[slug]/projects",
				pattern: /^\/([^/]+?)\/projects\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2], errors: [1,,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/[slug]/projects/new",
				pattern: /^\/([^/]+?)\/projects\/new\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,6], errors: [1,,,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/[slug]/projects/[slug2]/applications",
				pattern: /^\/([^/]+?)\/projects\/([^/]+?)\/applications\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false},{"name":"slug2","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,3], errors: [1,,,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/[slug]/projects/[slug2]/applications/new",
				pattern: /^\/([^/]+?)\/projects\/([^/]+?)\/applications\/new\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false},{"name":"slug2","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,3,5], errors: [1,,,,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/[slug]/projects/[slug2]/applications/[slug3]",
				pattern: /^\/([^/]+?)\/projects\/([^/]+?)\/applications\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false},{"name":"slug2","optional":false,"rest":false,"chained":false},{"name":"slug3","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,3,4], errors: [1,,,,], leaf: 11 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
