import { r as redirect } from "../../../../../../../chunks/index.js";
async function load({ params, cookies }) {
  const username = cookies.get("username");
  const projectsId = params.slug;
  const applicationId = params.slug2;
  const res = await fetch("https://dummyjson.com/users/5/carts", {
    method: "GET"
  });
  const resData = await res.json();
  return {
    "username": username,
    "projectId": projectsId,
    "applicationId": applicationId,
    "product": resData["carts"][0]["products"][0]
  };
}
const actions = {
  default: async ({ cookies }) => {
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
  }
};
export {
  actions,
  load
};
