import { redirect } from '@sveltejs/kit';


/** @type {import('./$types').Actions} */
export const actions = {
    new: async ({ cookies, request }) => {
        const formData = await request.formData();
        const name = formData.get("name")
        const description = formData.get("description");
        const username = cookies.get("username");
        const teamid = cookies.get("teamid");
        const sessionid = cookies.get("sessionid");
        
        const res = await fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: "kminchelle",
                password: "0lelplR"
            })
        });

        const resData = await res.json();

        if (resData["username"]) {
            throw redirect(302, "/"+username+"/projects");
        }


    }
}

