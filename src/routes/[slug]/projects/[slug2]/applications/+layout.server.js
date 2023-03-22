 import { redirect } from '@sveltejs/kit';

 /** @type {import('./$types').LayoutServerLoad} */
export async function load({ cookies }) {
  const teamId = cookies.get('teamId');
  const sessionId = cookies.get('sessionId');
  const teamName = cookies.get('teamName');

  if (!sessionId || !teamId || !teamName)
  {
    throw redirect(302, "/");
  }
}