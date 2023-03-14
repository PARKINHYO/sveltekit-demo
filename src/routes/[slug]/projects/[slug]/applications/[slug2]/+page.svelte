
<script>
    /** @type {import('./$types').PageServerData} */
    export let data;
</script>

<nav>
    <a href="/{data.username}/projects">Projects</a>
</nav>

<h1>Application</h1>

<p>
    username: {data.username}<br><br>
    projectid: {data.projectId}<br><br>
    applicationid: {data.applicationId}<br><br>
    productid: {data.product['id']}<br><br>
    producttitle: {data.product['title']}<br><br>
    productprice: {data.product['price']}<br><br>
    productquantity: {data.product['quantity']}<br><br>
    producttotal: {data.product['total']}<br><br>
    productdiscountPercentage: {data.product['discountPercentage']}<br><br>
    productdiscountPrice: {data.product['discountedPrice']}<br><br>
</p>

<br><br><br><br><br>
<form method="POST" ><button>Sign out</button></form>