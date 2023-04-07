import { redirect } from '@sveltejs/kit';
import { API_URL, API_VERSION } from '$env/static/private';

/** @type {import('./$types').PageServerLoad} */
export async function load({params, cookies }) {
    const sessionId = cookies.get('sessionId');
    
    if (params.slug != sessionId) {
        throw redirect(302, "/" + sessionId + "/projects");
    }
}

/** @type {import('./$types').Actions} */
export const actions = {
    new: async ({ cookies, request, params}) => {
        const teamId = cookies.get('teamId');
        const sessionId = cookies.get('sessionId');
        const teamName = cookies.get('teamName');

        const formData = await request.formData();

        const name = formData.get("name")
        const description = formData.get("description");
        const type = formData.get("type");

        const projectId = params.slug2
        
        const res = await fetch(API_URL + "/api/" + API_VERSION + "/app", {
            method: 'POST',
            headers: {'Content-Type': 'application/json' },
            body: JSON.stringify({
                "name": name,
                "type": type,
                "description": description,
                "user_id": sessionId, 
                "project_id": projectId
            })
        });

        const resData = await res.json();

        if (resData["message"] === "Application Created successfully") {
            throw redirect(302, "/"+sessionId+"/projects/"+projectId+"/applications");
        }

        return {
            invalidMessage: resData["message"]
        }
    },

    signout: async ({ cookies }) => {
        cookies.set("sessionId", '', {
            path: "/",
            maxAge: 0,
          });
          cookies.set("teamId", '', {
            path: "/",
            maxAge: 0,
          });
          cookies.set("teamName", '', {
            path: "/",
            maxAge: 0,
          });
          throw redirect(302, "/");
    }
}

