import { c as create_ssr_component, e as escape, d as each } from "../../../../../../chunks/index2.js";
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

<h1>Applications</h1>

<p>username: ${escape(data.username)}<br>
    projectid: ${escape(data.projectId)}</p>

<form method="POST" action="?/create"><button>New application</button></form>
<br><br>

<table class="svelte-81j0aw"><thead><tr><th class="svelte-81j0aw">id</th>
            <th class="svelte-81j0aw">product</th>
            <th class="svelte-81j0aw">price</th>
            <th class="svelte-81j0aw">quantity</th>
            <th class="svelte-81j0aw">total</th>
            <th class="svelte-81j0aw">discountPercentage</th>
            <th class="svelte-81j0aw">discountedPrice</th></tr></thead>
<tbody>${each(data.products, (product) => {
    return `<tr><td class="svelte-81j0aw">${escape(product["id"])}</td>
          <td class="svelte-81j0aw"><a href="${"/" + escape(data.username, true) + "/projects/" + escape(data.projectId, true) + "/applications/" + escape(product["id"], true)}">${escape(product["title"])}</a></td>
          <td class="svelte-81j0aw">${escape(product["price"])}</td>
          <td class="svelte-81j0aw">${escape(product["quantity"])}</td>
          <td class="svelte-81j0aw">${escape(product["total"])}</td>
          <td class="svelte-81j0aw">${escape(product["discountPercentage"])}</td>
          <td class="svelte-81j0aw">${escape(product["discountedPrice"])}</td>
      </tr>`;
  })}</tbody></table>



<br><br><br><br><br>
<form method="POST" action="?/signout"><button>Sign out</button></form>`;
});
export {
  Page as default
};
