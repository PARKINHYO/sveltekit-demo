import { redirect } from '@sveltejs/kit';
import { API_URL, API_VERSION } from '$env/static/private';

/** @type {import('./$types').PageServerLoad} */
export async function load({ cookies }) {
  const sessionId = await cookies.get('sessionId');
  const teamId = await cookies.get('teamId');
  if (sessionId) {
    throw redirect(302, "/" + sessionId + "/projects");
  }
  return { sessionId };
}

/** @type {import('./$types').Actions} */
export const actions = {
    // @ts-ignore
    signup: async ({ cookies, request }) => {
      const formData = await request.formData();

      const id = formData.get("id");
      const password = formData.get("password");
      const name = formData.get("name");
      const email = formData.get("email");
      const team = formData.get("team");

      if (id === name) return {
        invalidMessage: "The id and name should not be the same."
      }

      const team_id = {
        "dev": 1,
        "ops": 2
      };

      const res = await fetch(API_URL + "/api/"+ API_VERSION + "/signup", {
        method: 'POST',
        headers: { 'Content-Type': "application/json" },
        body: JSON.stringify({
          "user_id": id,
          "password": password,
          // @ts-ignore
          "team_id": team_id[team],
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