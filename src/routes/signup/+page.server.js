import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ cookies }) {
  const sessionid = await cookies.get('sessionid');
  const username = await cookies.get('username');
  if (sessionid) {
    throw redirect(302, "/"+username+"/projects");
  }
  return { sessionid };
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

      const res = await fetch('https://dummyjson.com/users/add', {
        method: 'POST',
        headers: { 'Content-Type': "application/json" },
        body: JSON.stringify({
          "id": id,
          "password": password,
          "name": name,
          "email": email,
          "team": team,
        })
      });

      const resData = await res.json();

      if (resData["id"]) {
        // 홈으로 메시지 전달
        throw redirect(302, "/");
      };

      return {
        invalidMessage: "the Id is already taken",
      }
    },
};