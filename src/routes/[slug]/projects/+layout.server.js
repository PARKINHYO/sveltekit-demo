 import { redirect } from '@sveltejs/kit';

 /** @type {import('./$types').LayoutServerLoad} */
export async function load({ cookies }) {
  const sessionId = cookies.get('sessionId');

  if (!sessionId)
  {
    throw redirect(302, "/");
  }
}