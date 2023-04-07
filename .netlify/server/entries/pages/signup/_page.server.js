import { r as redirect } from "../../../chunks/index.js";
import { A as API_URL, a as API_VERSION } from "../../../chunks/private.js";
async function load({ cookies }) {
  const sessionId = await cookies.get("sessionId");
  await cookies.get("teamId");
  if (sessionId) {
    throw redirect(302, "/" + sessionId + "/projects");
  }
  return { sessionId };
}
const actions = {
  // @ts-ignore
  signup: async ({ cookies, request }) => {
    const formData = await request.formData();
    const id = formData.get("id");
    const password = formData.get("password");
    const name = formData.get("name");
    const email = formData.get("email");
    const team = formData.get("team");
    if (id === name)
      return {
        invalidMessage: "The id and name should not be the same."
      };
    const team_id = {
      "dev": 1,
      "ops": 2
    };
    const res = await fetch(API_URL + "/api/" + API_VERSION + "/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
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
    }
    return {
      invalidMessage: "the id is already exists."
    };
  }
};
export {
  actions,
  load
};
