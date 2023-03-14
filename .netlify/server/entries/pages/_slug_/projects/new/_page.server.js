import { r as redirect } from "../../../../../chunks/index.js";
const actions = {
  new: async ({ cookies, request }) => {
    const formData = await request.formData();
    formData.get("name");
    formData.get("description");
    const username = cookies.get("username");
    cookies.get("teamid");
    cookies.get("sessionid");
    const res = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: "kminchelle",
        password: "0lelplR"
      })
    });
    const resData = await res.json();
    if (resData["username"]) {
      throw redirect(302, "/" + username + "/projects");
    }
  }
};
export {
  actions
};
