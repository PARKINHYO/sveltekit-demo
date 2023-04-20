<script>
    /** @type {import('./$types').PageServerData} */
    export let data;
    import { goto } from '$app/navigation';
</script>
<nav class="nav">
<div>
	<div class="project-logo">
		<a href="/"><img src="/logo.png" alt="logo" width="32" height="32"></a>
	</div>
	<div class="project-signout">
		<form method="POST" action="?/signout">
			<button class="project-signout-button">Sign out</button>
		</form>
	</div>
</div>
</nav>
<table class="project-table">
<div class="project-userid">
	 Hello🤚🏻 {data.userId}
</div>
<div>
	<div class="project-title">
		<div>
			{data.team}&nbsp;team&nbsp;projects({data.projects.length})
		</div>
	</div>
	<div>
		<form method="POST" action="?/create">
			<button class="project-create">Create project</button>
		</form>
	</div>
</div>
 {#each data.projects as project} <button class="project-tr" on:click={()=> goto(`/${data.userId}/projects/${project['id']}/applications`)}>
<div class="project-name">
	{project['name']}
</div>
<div class="project-appcount">
	{project['app_count']} applications
</div>
<div class="project-description">
	{project['description']}
</div>
</button>
{/each}
</table>