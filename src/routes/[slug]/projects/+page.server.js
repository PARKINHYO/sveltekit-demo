import { redirect } from '@sveltejs/kit';
import { API_URL, API_VERSION } from '$env/static/private';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params, cookies }) {
  const teamId = cookies.get('teamId');
  const sessionId = cookies.get('sessionId');
  const teamName = cookies.get('teamName');

  if (params.slug != sessionId) {
    // @ts-ignore
    throw redirect(302, "/" + sessionId + "/projects");
  }

  const res = await fetch(API_URL + "/api/" + API_VERSION + 
  "/projects/" + teamId, {
    method: 'GET',
  });

  const resData = await res.json();

  return {
    userId: sessionId,
    team: teamName,
    projects: resData.projects
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
      cookies.set("teamName", '', {
        path: "/",
        sameSite: "strict",
        maxAge: 0,
      });
      throw redirect(302, "/");
    },

    create: async ({cookies, request, params}) => {
      const sesssionId = await cookies.get('sessionId');
      throw redirect(302, "/" + sesssionId + "/projects/new");
    }
  };