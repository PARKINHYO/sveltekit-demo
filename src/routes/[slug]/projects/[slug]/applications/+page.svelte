

<script>
    /** @type {import('./$types').PageServerData} */
    export let data;
</script>

<nav>
    <a href="/{data.username}/projects">Projects</a>
</nav>

<h1>Applications</h1>

<p>
    username: {data.username}<br>
    projectid: {data.projectId}
</p>

<form method="POST" action="?/create"><button>New application</button></form>
<br><br>

<table>
    <thead>
        <tr>
            <th>id</th>
            <th>product</th>
            <th>price</th>
            <th>quantity</th>
            <th>total</th>
            <th>discountPercentage</th>
            <th>discountedPrice</th>
        </tr>
    </thead>
<tbody>
    {#each data.products as product}
      <tr>
          <td>{product['id']}</td>
          <td><a href="/{data.username}/projects/{data.projectId}/applications/{product['id']}">{product['title']}</a></td>
          <td>{product['price']}</td>
          <td>{product['quantity']}</td>
          <td>{product['total']}</td>
          <td>{product['discountPercentage']}</td>
          <td>{product['discountedPrice']}</td>
      </tr>
    {/each}
</tbody>
</table>

<style>
    table, th, td {
      border: 1px solid;
      border-collapse: collapse;
      margin: 10px;
    }
</style>

<br><br><br><br><br>
<form method="POST" action="?/signout" ><button>Sign out</button></form>