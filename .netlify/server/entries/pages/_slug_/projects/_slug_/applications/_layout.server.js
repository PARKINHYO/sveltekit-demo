import { r as redirect } from "../../../../../../chunks/index.js";
async function load({ cookies }) {
  const sessionid = cookies.get("sessionid");
  await cookies.get("username");
  if (!sessionid) {
    throw redirect(302, "/");
  }
}
export {
  load
};
