import { r as redirect } from "../../../../chunks/index.js";
async function load({ params }) {
  const res = await fetch("https://dummyjson.com/users/4/posts", {
    method: "GET"
  });
  const resData = await res.json();
  return {
    username: params.slug,
    posts: resData["posts"]
  };
}
const actions = {
  signout: async ({ cookies }) => {
    cookies.set("sessionid", "", {
      path: "/",
      sameSite: "strict",
      maxAge: 0
    });
    cookies.set("username", "", {
      path: "/",
      sameSite: "strict",
      maxAge: 0
    });
    cookies.set("teamid", "", {
      path: "/",
      sameSite: "strict",
      maxAge: 0
    });
    throw redirect(302, "/");
  },
  create: async ({ cookies, request }) => {
    const username = cookies.get("username");
    throw redirect(302, "/" + username + "/projects/new");
  }
};
export {
  actions,
  load
};
