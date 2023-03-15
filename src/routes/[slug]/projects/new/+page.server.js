import { redirect } from '@sveltejs/kit';
import { API_URL, API_VERSION } from '$env/static/private';

/** @type {import('./$types').Actions} */
export const actions = {
    new: async ({ cookies, request }) => {
        const teamId = cookies.get("teamId");
        const sessionId = cookies.get("sessionId");

        const formData = await request.formData();

        const name = formData.get("name");
        const description = formData.get("description");
        
        const res = await fetch(API_URL + "/api/" + API_VERSION + "/project", {
            method: 'POST',
            headers: {'Content-Type': 'application/json' },
            body: JSON.stringify({
                "name": name,
                "description": description,
                "user_id": sessionId,
                "team_id": teamId
            })
        });

        const resData = await res.json();

        if (resData["message"] === "Project Created succesfully") {
            throw redirect(302, "/"+ teamId +"/projects");
        }

        return {
            invlidMessage: "A project name already exists."
        }
    }
};

