import {
    redirect
} from '@sveltejs/kit';
import {
    API_URL,
    API_VERSION
} from '$env/static/private';

/** @type {import('./$types').PageServerLoad} */
export async function load({
    params,
    cookies
}) {
    const sessionId = cookies.get("sessionId");

    if (params.slug != sessionId) {
        throw redirect(302, "/" + sessionId + "/projects");
    }
}

/** @type {import('./$types').Actions} */
export const actions = {
    new: async ({
        cookies,
        request
    }) => {
        const teamId = cookies.get("teamId");
        const sessionId = cookies.get("sessionId");

        const formData = await request.formData();

        const name = formData.get("name");
        const description = formData.get("description");

        const res = await fetch(API_URL + "/api/" + API_VERSION + "/project", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "name": name,
                "description": description,
                "user_id": sessionId,
                "team_id": teamId
            })
        });

        const resData = await res.json();

        if (resData["message"] === "Project Created successfully") {
            throw redirect(302, "/" + sessionId + "/projects");
        }

        return {
            invalidMessage: resData["message"]
        }
    },

    signout: async ({
        cookies
    }) => {
        cookies.set("sessionId", '', {
            path: "/",
            sameSite: "strict",
            maxAge: 0
        });
        cookies.set("teamId", '', {
            path: "/",
            sameSite: "strict",
            maxAge: 0,
        });
        cookies.set("teamName", '', {
            path: "/",
            maxAge: 0,
        });
        throw redirect(302, "/");
    }
};