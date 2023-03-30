import { redirect } from '@sveltejs/kit';
import { API_URL, API_VERSION } from '$env/static/private';

/** @type {import('./$types').PageServerLoad} */
export async function load({ cookies }) {
  const teamId = cookies.get('teamId');
  const sessionId = cookies.get('sessionId');
  const teamName = cookies.get('teamName');

  if (sessionId && sessionId && teamName) {
    throw redirect(302, "/" + sessionId + "/projects");
  }

  return { sessionId };
}

/** @type {import('./$types').Actions} */
export const actions = {
  login: async ({ cookies, request }) => {
    const formData = await request.formData();

    const id = formData.get("id");
    const password = formData.get("password");

    const res = await fetch(API_URL + "/api/" + API_VERSION + "/login", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        "user_id": id,
        "password": password,
      })
    });
    
    const resData = await res.json();
    
    if (resData["message"] === "Login successfully")
    {
      cookies.set("sessionId", resData["user_id"],{ 
        path: "/",
        sameSite: "strict",
        maxAge: 60 * 60 * 24
      });

      cookies.set("teamId", resData["team_id"], {
        path: "/",
        sameSite: "strict",
        maxAge: 60 * 60 * 24
      });

      cookies.set("teamName", resData["team_name"], {
        path: "/", 
        sameSite: "strict",
        maxAge: 60 * 60 * 24
      });
      
      //@ts-ignore
      throw redirect(302, "/" + resData["user_id"] + "/projects");
    };

    return {
      invalidMessage: resData["message"],
    };
  },
 
  signup: async ({cookies, request }) => {
    throw redirect(302, "/signup");
  }
};