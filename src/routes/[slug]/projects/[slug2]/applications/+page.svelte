<script>
    /** @type {import('./$types').PageServerData} */
    export let data;
    export let form;
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

{#if form?.invalidMessage}
<div class="message">
    {form.invalidMessage}
</div>
{/if}

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
        <span>
            <form class="application-info-form" method="POST" action="?/build">
                <input type="hidden" name="appId" value="{application['id']}">
                <button class="application-info-button">Build</button>
            </form>
            <form class="application-info-form" method="POST" action="?/deploy">
                <input type="hidden" name="appId" value="{application['id']}">
                <button class="application-info-button">Deploy</button>
            </form>
            <form class="application-info-form" method="POST" action="?/source">
                <input type="hidden" name="appId" value="{application['id']}">
                <button class="application-info-button2">GitLab(source)</button>
            </form>
            <form class="application-info-form" method="POST" action="?/gitops">
                <input type="hidden" name="appId" value="{application['id']}">
                <button class="application-info-button2">GitLab(gitops)</button>
            </form>
            <form class="application-info-form" method="POST" action="?/jenkins">
                <input type="hidden" name="appId" value="{application['id']}">
                <button class="application-info-button4">Jenkins</button>
            </form>
            <form class="application-info-form" method="POST" action="?/argocd">
                <input type="hidden" name="appId" value="{application['id']}">
                <button class="application-info-button3">ArgoCD</button>
            </form>
            <form class="application-info-form" method="POST" action="?/grafana">
                <input type="hidden" name="appId" value="{application['id']}">
                <button class="application-info-button2">Grafana</button>
            </form>
            <form class="application-info-form" method="POST" action="?/kibana">
                <input type="hidden" name="appId" value="{application['id']}">
                <button class="application-info-button5">Kibana</button>
            </form>
        </span>
    </button>
{/each}
</table>