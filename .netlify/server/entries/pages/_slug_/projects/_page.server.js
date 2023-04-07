import { r as redirect } from "../../../../chunks/index.js";
import { A as API_URL, a as API_VERSION } from "../../../../chunks/private.js";
async function load({ params, cookies }) {
  const teamId = cookies.get("teamId");
  const sessionId = cookies.get("sessionId");
  const teamName = cookies.get("teamName");
  if (params.slug != sessionId) {
    throw redirect(302, "/" + sessionId + "/projects");
  }
  const res = await fetch(API_URL + "/api/" + API_VERSION + "/projects/" + teamId, {
    method: "GET"
  });
  const resData = await res.json();
  return {
    userId: sessionId,
    team: teamName,
    projects: resData.projects
  };
}
const actions = {
  signout: async ({ cookies }) => {
    cookies.set("sessionId", "", {
      path: "/",
      sameSite: "strict",
      maxAge: 0
    });
    cookies.set("teamId", "", {
      path: "/",
      sameSite: "strict",
      maxAge: 0
    });
    cookies.set("teamName", "", {
      path: "/",
      sameSite: "strict",
      maxAge: 0
    });
    throw redirect(302, "/");
  },
  create: async ({ cookies, request, params }) => {
    const sesssionId = await cookies.get("sessionId");
    throw redirect(302, "/" + sesssionId + "/projects/new");
  }
};
export {
  actions,
  load
};
