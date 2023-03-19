import { redirect } from '@sveltejs/kit';
import { API_URL, API_VERSION } from '$env/static/private';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params, cookies }) {
  const teamId = cookies.get('teamId');
  const team = {
    "1": "dev",
    "2": "ops"
  };

  if (params.slug != teamId) {
    throw redirect(302, "/" + teamId + "/projects");
  }

  const res = await fetch(API_URL + "/api/" + API_VERSION + 
  "/projects/" + params.slug, {
    method: 'GET',
  });

  const resData = await res.json();

  return {
    teamId: params.slug,
    projects: resData,
    // @ts-ignore
    "team": team[teamId]
  }
}

/** @type {import('./$types').Actions} */
export const actions = {
    signout: async ({cookies}) => {
      cookies.set("sessionId", '', {
        path: "/",
        sameSite: "strict",
        maxAge: 0,
      });
      cookies.set("teamId", '', {
        path: "/",
        sameSite: "strict",
        maxAge: 0,
      });
      throw redirect(302, "/");
    },

    create: async ({cookies, request, params}) => {
      const teamId = await cookies.get('teamId');
      throw redirect(302, "/" + teamId + "/projects/new");
    }
  };