import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').LayoutServerLoad} */
export async function load({ cookies }) {
 const sessionid = cookies.get('sessionid');

 if (!sessionid)
 {
   throw redirect(302, "/");
 }
}