import { c as create_ssr_component, e as escape } from "../../chunks/index2.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  let { data } = $$props;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="logo"><a href="/"><img src="logo.png" alt="logo" width="65" height="65"></a></div>

<div class="slogun">Sign in to KS5</div>

${form?.invalidMessage ? `<div class="message">${escape(form.invalidMessage)}</div>` : ``}

${!data?.sessionId ? `<div class="login"><form method="POST" action="?/login"><div class="text">Id</div>
        <input name="id" type="text" id="id" class="account">
        <div class="text">Password</div>
        <input name="password" type="password" id="password" class="account">
        <button id="login" class="account">Sign in</button></form></div>
<div class="minibox"><div class="container2">New to KS5? <a href="/signup" class="link">Create an account</a>.</div></div>` : `<div class="minibox"><div class="container2">login completed</div></div>`}`;
});
export {
  Page as default
};
