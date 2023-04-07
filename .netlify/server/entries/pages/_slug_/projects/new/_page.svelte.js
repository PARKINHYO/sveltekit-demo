import { c as create_ssr_component, e as escape } from "../../../../../chunks/index2.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  return `<nav class="nav"><div><div class="project-logo"><a href="/"><img src="../../logo.png" alt="logo" width="32" height="32"></a></div>

        <div class="project-signout"><form method="POST" action="?/signout"><button class="project-signout-button">Sign out</button></form></div></div></nav>

${form?.invalidMessage ? `<div class="message">${escape(form.invalidMessage)}</div>` : ``}

<div class="div-project-create"><form method="POST" action="?/new"><div class="div-project-create-form-text-name">Name
        </div>
        <input name="name" type="text" class="input-project-create-form-name" required minlength="1" maxlength="20">
        <div class="div-project-create-form-text-name">Description
        </div>
        <textarea name="description" class="textarea-project-create-form-description" cols="70" rows="30" required minlength="5" maxlength="200"></textarea>
        <button id="login" class="input-project-create-form-name">Create project
        </button></form></div>`;
});
export {
  Page as default
};
