import { r as redirect } from "../../../chunks/index.js";
async function load({ cookies }) {
  const sessionid = await cookies.get("sessionid");
  const username = await cookies.get("username");
  if (sessionid) {
    throw redirect(302, "/" + username + "/projects");
  }
  return { sessionid };
}
const actions = {
  signup: async ({ cookies, request }) => {
    const formData = await request.formData();
    const id = formData.get("id");
    const password = formData.get("password");
    const name = formData.get("name");
    const email = formData.get("email");
    const team = formData.get("team");
    const res = await fetch("https://dummyjson.com/users/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        "id": id,
        "password": password,
        "name": name,
        "email": email,
        "team": team
      })
    });
    const resData = await res.json();
    if (resData["id"]) {
      throw redirect(302, "/");
    }
    return {
      invalidMessage: "the Id is already taken"
    };
  }
};
export {
  actions,
  load
};
