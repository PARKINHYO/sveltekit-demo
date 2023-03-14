import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
  
  const res = await fetch('https://dummyjson.com/users/4/posts', {
    method: 'GET',
  });

  const resData = await res.json();
  
  return {
    username: params.slug,
    posts: resData['posts']
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

    create: async ({cookies, request}) => {
      const username = cookies.get("username");
      throw redirect(302, "/"+username+"/projects/new");
    }
  };