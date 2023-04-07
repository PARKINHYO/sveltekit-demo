import { r as redirect } from "../../../../chunks/index.js";
async function load({ cookies }) {
  const teamId = cookies.get("teamId");
  const sessionId = cookies.get("sessionId");
  const teamName = cookies.get("teamName");
  if (!sessionId || !teamId || !teamName) {
    throw redirect(302, "/");
  }
}
export {
  load
};
