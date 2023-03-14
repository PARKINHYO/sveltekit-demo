import { c as create_ssr_component, e as escape } from "../../../../../../../chunks/index2.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<nav><a href="${"/" + escape(data.username, true) + "/projects"}">Projects</a></nav>

<h1>Application</h1>

<p>username: ${escape(data.username)}<br><br>
    projectid: ${escape(data.projectId)}<br><br>
    applicationid: ${escape(data.applicationId)}<br><br>
    productid: ${escape(data.product["id"])}<br><br>
    producttitle: ${escape(data.product["title"])}<br><br>
    productprice: ${escape(data.product["price"])}<br><br>
    productquantity: ${escape(data.product["quantity"])}<br><br>
    producttotal: ${escape(data.product["total"])}<br><br>
    productdiscountPercentage: ${escape(data.product["discountPercentage"])}<br><br>
    productdiscountPrice: ${escape(data.product["discountedPrice"])}<br><br></p>

<br><br><br><br><br>
<form method="POST"><button>Sign out</button></form>`;
});
export {
  Page as default
};
