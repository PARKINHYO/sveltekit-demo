import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').LayoutServerLoad} */
export async function load({ cookies }) {
 const sessionid = cookies.get('sessionid');
 const username = await cookies.get('username');

 if (!sessionid)
 {
   throw redirect(302, "/");
 }
}