import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params, cookies }) {
  const username = cookies.get('username');
  const projectsId = params.slug;

  const res = await fetch('https://dummyjson.com/users/5/carts', {
    method: 'GET',
  });

  const resData = await res.json();
  
  return {
    "username": username,
    "projectId": projectsId,
    "products": resData['carts'][0]['products']
  }
}

/** @type {import('./$types').Actions} */
export const actions = {
    signout: async ({cookies}) => {
      // TODO log the user in
      cookies.set("sessionid", '', {
        path: "/",
        sameSite: "strict",
        maxAge: 0,
      });
      cookies.set("username", '', {
        path: "/",
        sameSite: "strict",
        maxAge: 0,
      });
      cookies.set("teamid", "", {
        path: "/",
        sameSite: "strict",
        maxAge: 0,
      });
      throw redirect(302, "/");
    },

    create: async ({cookies, request, params}) => {
      const username = cookies.get("username");
      const projectid = params.slug;
      throw redirect(302, "/"+username+"/projects/"+projectid+"/applications/new");
    }
  };