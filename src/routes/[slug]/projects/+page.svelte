<script>
    /** @type {import('./$types').PageServerData} */
    export let data;
</script>

<nav>
    <a href="/{data.teamId}/projects">Projects</a>
</nav>

<h1>Projects</h1>

<form method="POST" action="?/create"><button>New project</button></form>
<br><br>

<table>
    <thead>
        <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Description</th>
        </tr>
    </thead>
<tbody>
    {#each data.projects as project}
      <tr>
          <td>{project['id']}</td>
          <td><a href="/{data.teamId}/projects/{project['id']}/applications">{project['name']}</a></td>
          <td>{project['description']}</td>
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

