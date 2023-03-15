import { redirect } from '@sveltejs/kit';
import { API_URL, API_VERSION } from '$env/static/private';

/** @type {import('./$types').PageServerLoad} */
export async function load({ cookies }) {
  const sessionId = await cookies.get('sessionId');
  const teamId = await cookies.get('teamId');
  if (sessionId) {
    throw redirect(302, "/" + teamId + "/projects");
  }
  return { sessionId };
}

/** @type {import('./$types').Actions} */
export const actions = {
    signup: async ({ cookies, request }) => {
      const formData = await request.formData();
      const id = formData.get("id");
      const password = formData.get("password");
      const name = formData.get("name");
      const email = formData.get("email");
      const team = formData.get("team");
      console.log(team)

      let team_id;
      
      if (team === "dev") {
        team_id = "2";
      }
      else {
        team_id = "1";
      }

      const res = await fetch(API_URL + "/api/"+ API_VERSION + "/signup", {
        method: 'POST',
        headers: { 'Content-Type': "application/json" },
        body: JSON.stringify({
          "user_id": id,
          "password": password,
          "team_id": team_id,
          "name": name,
          "email": email
        })
      });

      const resData = await res.json();

      if (resData["message"] === "User Created successfully") {
        throw redirect(302, "/");
      };

      return {
        invalidMessage: "the id is already exists.",
      }
    },
};