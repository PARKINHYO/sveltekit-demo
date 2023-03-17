<script>
    /** @type {import('./$types').PageServerData} */
    export let data;
    
</script>

<nav class="nav">
    <div>
        <div class="project-logo">
            <a href="/" ><img src="../../logo.png" alt="logo" width="32" height="32"></a>
        </div>

        <div class="project-signout">
            <form method="POST" action="?/signout"><button class="project-signout-button">Sign out</button></form>
        </div>
    </div>
</nav>

<table class="project-table">
    <div>
        <div class="project-title">
            <div>Projects({data.projects.length})</div>
        </div>
        <div>
            <form method="POST" action="?/create"><button class="project-create">Create project</button></form>
        </div>
    </div>
{#each data.projects as project}
    <button class="project-tr">
        <div class="project-name">{project['name']}</div>
        <div class="project-description">{project['description']}</div>
    </button>
{/each}
</table>