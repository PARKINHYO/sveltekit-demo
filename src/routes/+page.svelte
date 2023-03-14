<script>
    export let form;

    /** @type {import('./$types').PageData} */
    export let data;
</script>

<h1>Home</h1>

<form method="POST" action="?/signup"><button>Sign up</button></form>
<br><br>

{#if !data?.sessionid}
<form method="POST" action="?/login">
    <label>
        Id
        <input name="id" type="text" value={form?.id || ""} 
        required minlength="5" maxlength="20">
    </label>
    <label>
        Password
        <input name="password" type="password" required 
        minlength="5" maxlength="20">
    </label>
    <button>Sign in</button>
</form>
{:else}
<h1>login completed</h1>
{/if}

<p>ID: kminchelle</p>
<p>PW: 0lelplR</p>

{#if form?.invalidMessage}
<p>{form.invalidMessage}</p>
{/if}