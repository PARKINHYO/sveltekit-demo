import { redirect } from '@sveltejs/kit';
import { API_URL, API_VERSION } from '$env/static/private';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params, cookies }) {
  const teamId = cookies.get('teamId');
  const sessionId = cookies.get('sessionId');
  const teamName = cookies.get('teamName');

  if (params.slug != sessionId) {
    throw redirect(302, "/" + sessionId + "/projects");
  }

  const res = await fetch(API_URL + "/api/" + API_VERSION + 
  "/apps/" + params.slug2, {
    method: 'GET',
  });

  const resData = await res.json();
  
  return {
    userId: sessionId,
    team: teamName,
    project: resData.project_name,
    projectId: resData.project_id,
    applications: resData.applications
  }
}

/** @type {import('./$types').Actions} */
export const actions = {
    signout: async ({cookies}) => {
      // TODO log the user in
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
      cookies.set("teamName", "", {
        path: "/",
        sameSite: "strict",
        maxAge: 0,
      });
      throw redirect(302, "/");
    },

    create: async ({cookies, request, params}) => {
      const sessionId = cookies.get('sessionId');
      throw redirect(302, "/"+sessionId+"/projects/"+params.slug2+"/applications/new");
    }
  };