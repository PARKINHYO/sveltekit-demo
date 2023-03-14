import { c as create_ssr_component, e as escape } from "../../../chunks/index2.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  return `<nav>Already have an account? <a href="/">Sign in</a></nav>

<h1>Sign up</h1>

<form method="POST" action="?/signup"><label>Id: 
        <input name="id" type="text" required minlength="5" maxlength="20">
    </label><br>
    <label>Password: 
        <input name="password" type="password" required minlength="5" maxlength="20">
    </label><br>
    <label>Name: 
        <input name="name" type="text" required minlength="5" maxlength="20">
    </label><br>
    <label>Email: 
        <input name="email" type="email" required minlength="5" maxlength="40">
    </label><br>
    <label>Team: 
        <select name="team"><option value="frontend-1">frontend-1</option><option value="frontend-2">frontend-2</option><option value="frontend-squad">frontend-squad</option><option value="backend-product">backend-product</option><option value="backend-order">backend-order</option><option value="backend-squad">backend-squad</option></select>
    </label><br>
    <button>Create account</button></form>

${form?.invalidMessage ? `<p>${escape(form.invalidMessage)}</p>` : ``}`;
});
export {
  Page as default
};
