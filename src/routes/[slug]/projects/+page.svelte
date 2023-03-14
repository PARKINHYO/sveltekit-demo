

<script>
    /** @type {import('./$types').PageServerData} */
    export let data;
</script>

<nav>
    <a href="/{data.username}/projects">Projects</a>
</nav>

<h1>Projects</h1>

<form method="POST" action="?/create"><button>New project</button></form>
<br><br>

<table>
    <thead>
        <tr>
            <th>id</th>
            <th>title</th>
            <th>body</th>
        </tr>
    </thead>
<tbody>
    {#each data.posts as post}
      <tr>
          <td>{post['id']}</td>
          <td><a href="/{data.username}/projects/{post['id']}/applications">{post['title']}</a></td>
          <td>{post['body']}</td>
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
<form method="POST" action="?/signout"><button>Sign out</button></form>

