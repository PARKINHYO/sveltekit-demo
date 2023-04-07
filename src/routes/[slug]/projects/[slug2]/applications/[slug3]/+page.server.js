import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params, cookies }) {
  const username = cookies.get('username');
  const projectsId = params.slug;
  const applicationId = params.slug2;

  const res = await fetch('https://dummyjson.com/users/5/carts', {
    method: 'GET',
  });

  const resData = await res.json();
  
  return {
    "username": username,
    "projectId": projectsId,
    "applicationId": applicationId,
    "product": resData['carts'][0]['products'][0]
  }
}

/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({cookies}) => {
      // TODO log the user in
      cookies.set("sessionid", '', {
        path: "/",
        maxAge: 0,
      });
      cookies.set("username", '', {
        path: "/",
        maxAge: 0,
      });
      cookies.set("teamid", "", {
        path: "/",
        maxAge: 0,
      });
      throw redirect(302, "/");
    }
  };