<script>
    /** @type {import('./$types').PageServerData} */
    export let data;

    import { goto } from '$app/navigation';
</script>

<nav class="nav">
    <div>
        <div class="project-logo">
            <a href="/" ><img src="../../../logo.png" alt="logo" width="32" height="32"></a>
        </div>

        <div class="project-signout">
            <form method="POST" action="?/signout"><button class="project-signout-button">Sign out</button></form>
        </div>
    </div>
</nav>

<table class="project-table">
    <div class="project-userid">
        Hello🤚🏻 {data.userId}
    </div>
    <div>
        <div class="project-title">
            <div>{data.project}&nbsp;applications({data.applications.length})</div>
        </div>
        <div>
            <form method="POST" action="?/create"><button class="project-create">Create application</button></form>
        </div>
    </div>
{#each data.applications as application}
    <button class="project-tr">
        <div class="project-name">{application['name']}</div>
        <div class="project-description">{application['description']}</div>
        <div class="project-appcount">type: {application['type']}</div> 
        <div class="project-appcount">author: {application['user_id']}</div> 
    </button>
{/each}
</table>









<!-- <h1>Applications</h1>

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
<form method="POST" action="?/signout" ><button>Sign out</button></form> -->