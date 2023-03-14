import { c as create_ssr_component } from "../../chunks/index2.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".main.svelte-14n5uit{width:310px;margin:auto;margin-top:10px;height:220px;display:flex;justify-content:center;align-items:center;flex-direction:column;border-radius:10px;background-color:#121519;border:1px solid #191D21}#login.svelte-14n5uit{width:100%;background-color:#1F7629;border-color:transparent;color:white;margin-top:15px}.account.svelte-14n5uit{width:275px;height:29px;display:block;margin-bottom:2px;border:1px solid #24292E;border-radius:7px;background-color:#0C0E12;color:white}.container2.svelte-14n5uit{padding:6px}.main2.svelte-14n5uit{width:310px;margin:auto;margin-top:12px;height:50px;display:flex;justify-content:center;align-items:center;flex-direction:column;border-radius:10px;background-color:#0C0E12;border:1px solid #24292E}.main3.svelte-14n5uit{width:170px;margin:auto;margin-top:35px;height:70px;font-size:28px;display:flex;justify-content:center;align-items:center;flex-direction:column;border-radius:10px;background-color:#0B0C0F}.main4.svelte-14n5uit{width:170px;margin:auto;margin-top:3px;height:70px;font-size:28px;display:flex;justify-content:center;align-items:center;flex-direction:column;border-radius:10px;background-color:#0B0C0F}.link.svelte-14n5uit{color:#407CDC;text-decoration-line:none}.link.svelte-14n5uit:hover{text-decoration:underline}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  let { data } = $$props;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `


<div class="main3 svelte-14n5uit"><a href="/"><img src="logo.png" alt="logo" width="65" height="65"></a></div>

<div class="main4 svelte-14n5uit">Sign in to KS5</div>


<div class="main svelte-14n5uit">
    <div class="container"><div class="container2 svelte-14n5uit">Id</div>
        <input type="text" id="id" class="account svelte-14n5uit">
        <div class="container2 svelte-14n5uit">Password</div>
        <input type="password" id="password" class="account svelte-14n5uit">
        <button id="login" class="account svelte-14n5uit">Sign in</button></div></div>   
<div class="main2 svelte-14n5uit"><div class="container2 svelte-14n5uit">New to KS5? <a href="/signup" class="link svelte-14n5uit">Create an account</a>.</div>
</div>`;
});
export {
  Page as default
};
