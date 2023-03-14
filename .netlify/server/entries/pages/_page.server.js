import { r as redirect } from "../../chunks/index.js";
async function load({ cookies }) {
  const sessionid = await cookies.get("sessionid");
  const username = await cookies.get("username");
  if (sessionid) {
    throw redirect(302, "/" + username + "/projects");
  }
  return { sessionid };
}
const actions = {
  login: async ({ cookies, request }) => {
    const formData = await request.formData();
    const id = formData.get("id");
    const password = formData.get("password");
    const res = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: id,
        password
      })
    });
    const resData = await res.json();
    if (resData["username"]) {
      cookies.set("sessionid", resData["token"], {
        path: "/",
        sameSite: "strict",
        maxAge: 60 * 60 * 24
      });
      cookies.set("username", resData["username"], {
        path: "/",
        sameSite: "strict",
        maxAge: 60 * 60 * 24
      });
      cookies.set("teamid", "0", {
        path: "/",
        sameSite: "strict",
        maxAge: 60 * 60 * 24
      });
      throw redirect(302, "/" + resData["username"] + "/projects");
    }
    return {
      username: resData["username"],
      id,
      invalidMessage: "id or password is not valid"
    };
  },
  signup: async ({ cookies, request }) => {
    throw redirect(302, "/signup");
  }
};
export {
  actions,
  load
};
