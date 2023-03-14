import { c as create_ssr_component, e as escape, d as each } from "../../../../chunks/index2.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "table.svelte-81j0aw,th.svelte-81j0aw,td.svelte-81j0aw{border:1px solid;border-collapse:collapse;margin:10px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<nav><a href="${"/" + escape(data.username, true) + "/projects"}">Projects</a></nav>

<h1>Projects</h1>

<form method="POST" action="?/create"><button>New project</button></form>
<br><br>

<table class="svelte-81j0aw"><thead><tr><th class="svelte-81j0aw">id</th>
            <th class="svelte-81j0aw">title</th>
            <th class="svelte-81j0aw">body</th></tr></thead>
<tbody>${each(data.posts, (post) => {
    return `<tr><td class="svelte-81j0aw">${escape(post["id"])}</td>
          <td class="svelte-81j0aw"><a href="${"/" + escape(data.username, true) + "/projects/" + escape(post["id"], true) + "/applications"}">${escape(post["title"])}</a></td>
          <td class="svelte-81j0aw">${escape(post["body"])}</td>
      </tr>`;
  })}</tbody></table>



<br><br><br><br><br>
<form method="POST" action="?/signout"><button>Sign out</button></form>`;
});
export {
  Page as default
};
