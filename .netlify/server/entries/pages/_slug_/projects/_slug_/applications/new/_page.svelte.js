import { c as create_ssr_component } from "../../../../../../../chunks/index2.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h1>New Application</h1>

<form method="POST" action="?/new"><label>Name: 
        <input name="name" type="text" required minlength="5" maxlength="20">
    </label><br><br>
    <label>Type: 
        <select name="type"><option value="springboot">springboot</option><option value="django">django</option></select>
    </label><br><br>
    <label>Description: <br>
        <textarea name="description" cols="70" rows="30" required minlength="5" maxlength="1000"></textarea>
    </label><br><br>
    <button>Create new application</button></form>`;
});
export {
  Page as default
};
