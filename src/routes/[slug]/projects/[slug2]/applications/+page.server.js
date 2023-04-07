import { redirect } from '@sveltejs/kit';
import { API_URL, API_VERSION } from '$env/static/private';
import { onMount } from 'svelte';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params, cookies }) {
  const teamId = cookies.get('teamId');
  const sessionId = cookies.get('sessionId');
  const teamName = cookies.get('teamName');

  if (params.slug != sessionId) {
    throw redirect(302, "/" + sessionId + "/projects");
  }

  const res = await fetch(API_URL + "/api/" + API_VERSION + 
  "/apps/" + params.slug2, {
    method: 'GET',
  });

  const resData = await res.json();
  
  return {
    userId: sessionId,
    team: teamName,
    project: resData.project_name,
    projectId: resData.project_id,
    applications: resData.applications
  }
}

/** @type {import('./$types').Actions} */
export const actions = {
    signout: async ({cookies}) => {
      // TODO log the user in
      cookies.set("sessionId", '', {
        path: "/",
        maxAge: 0,
      });
      cookies.set("teamId", '', {
        path: "/",
        maxAge: 0,
      });
      cookies.set("teamName", "", {
        path: "/",
        maxAge: 0,
      });
      throw redirect(302, "/");
    },

    create: async ({cookies, request, params}) => {
      const sessionId = cookies.get('sessionId');
      throw redirect(302, "/"+sessionId+"/projects/"+params.slug2+"/applications/new");
    },

    build: async ({ cookies, request, params}) => {
      const formData = await request.formData();
      const appId = formData.get("appId");

      const res = await fetch(API_URL + "/api/" + API_VERSION + 
      "/jenkins/" + appId, {
        method: 'GET',
      });
    
      const resData = await res.json();

      return {
        invalidMessage: resData["message"]
      };
    },

    deploy: async ({ cookies, request, params}) => {
      const formData = await request.formData();
      const appId = formData.get("appId");

      const res = await fetch(API_URL + "/api/" + API_VERSION + 
      "/argocd/" + appId, {
        method: 'GET',
      });
    
      const resData = await res.json();

      return {
        invalidMessage: resData["message"]
      };

    },

    source: async ({ cookies, request, params}) => {
      const formData = await request.formData();
      const appId = formData.get("appId");

      const res = await fetch(API_URL + "/api/" + API_VERSION + 
      "/application/" + appId, {
        method: 'GET',
      });
    
      const resData = await res.json();

      if (resData["gitlab_source_url"] != "") {
        throw redirect(302, resData["gitlab_source_url"])
      };

      return {
        invalidMessage: "preparing site..."
      };
    },

    gitops: async ({ cookies, request, params}) => {
      const formData = await request.formData();
      const appId = formData.get("appId");

      const res = await fetch(API_URL + "/api/" + API_VERSION + 
      "/application/" + appId, {
        method: 'GET',
      });
    
      const resData = await res.json();

      if (resData["gitlab_helm_url"] != "") {
        throw redirect(302, resData["gitlab_helm_url"])
      };

      return {
        invalidMessage: "preparing site..."
      };
    },

    jenkins: async ({ cookies, request, params}) => {
      const formData = await request.formData();
      const appId = formData.get("appId");

      const res = await fetch(API_URL + "/api/" + API_VERSION + 
      "/application/" + appId, {
        method: 'GET',
      });
    
      const resData = await res.json();

      if (resData["jenkins_url"] != "") {
        throw redirect(302, resData["jenkins_url"])
      };

      return {
        invalidMessage: "preparing site..."
      };
    },

    argocd: async ({ cookies, request, params}) => {
      const formData = await request.formData();
      const appId = formData.get("appId");

      const res = await fetch(API_URL + "/api/" + API_VERSION + 
      "/application/" + appId, {
        method: 'GET',
      });
    
      const resData = await res.json();

      if (resData["argocd_url"] != "") {
        throw redirect(302, resData["argocd_url"])
      };

      return {
        invalidMessage: "preparing site..."
      };
    },

    grafana: async ({ cookies, request, params}) => {
      const formData = await request.formData();
      const appId = formData.get("appId");

      const res = await fetch(API_URL + "/api/" + API_VERSION + 
      "/application/" + appId, {
        method: 'GET',
      });
    
      const resData = await res.json();

      if (resData["grafana_url"] != "") {
        throw redirect(302, resData["grafana_url"])
      };

      return {
        invalidMessage: "preparing site..."
      };
    },

    kibana: async ({ cookies, request, params}) => {
      const formData = await request.formData();
      const appId = formData.get("appId");

      const res = await fetch(API_URL + "/api/" + API_VERSION + 
      "/application/" + appId, {
        method: 'GET',
      });
    
      const resData = await res.json();

      if (resData["kibana_url"] != "") {
        throw redirect(302, resData["kibana_url"])
      };

      return {
        invalidMessage: "preparing site..."
      };
    }
  };