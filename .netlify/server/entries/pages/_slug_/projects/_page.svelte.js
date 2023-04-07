import { c as create_ssr_component, e as escape, d as each } from "../../../../chunks/index2.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<nav class="nav"><div><div class="project-logo"><a href="/"><img src="../../logo.png" alt="logo" width="32" height="32"></a></div>

        <div class="project-signout"><form method="POST" action="?/signout"><button class="project-signout-button">Sign out</button></form></div></div></nav>

<table class="project-table"><div class="project-userid">Hello🤚🏻 ${escape(data.userId)}</div>
    <div><div class="project-title"><div>${escape(data.team)} team projects(${escape(data.projects.length)})</div></div>
        <div><form method="POST" action="?/create"><button class="project-create">Create project</button></form></div></div>
${each(data.projects, (project) => {
    return `<button class="project-tr"><div class="project-name">${escape(project["name"])}</div>
        <div class="project-appcount">${escape(project["app_count"])} applications</div> 
        <div class="project-description">${escape(project["description"])}</div>
    </button>`;
  })}</table>`;
});
export {
  Page as default
};
