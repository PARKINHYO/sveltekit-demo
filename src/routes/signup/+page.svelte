<script>
    export let form;
</script>

<div class="logo"><a href="/" >
    <img src="logo.png" alt="logo" width="65" height="65"></a>
</div>

<div class="slogun">Sign up</div>

{#if form?.invalidMessage}
<div class="message">
    {form.invalidMessage}
</div>
{/if}

<div class="signup">
    <form method="POST" action="?/signup">
        <div class="text">Id</div>
        <input name="id" type="text" class="account" required minlength="1" maxlength="20">
        <div class="text">Password</div>
        <input name="password" type="password" class="account" required minlength="5" maxlength="100">
        <div class="text">Name</div>
        <input name="name" type="text" class="account"required minlength="1" maxlength="20">
        <div class="text">Email</div>
        <input name="email" type="email" class="account">
        <div class="text">Team</div>
        <select name="team" class="account">
            <option value="frontend-1">dev</option>
            <option value="frontend-2">ops</option>
        </select>
        <button id="login" class="account">Create account</button>
    </form>
</div>

<div class="minibox">
    <div class="container2">Already have an account? <a href="/" class="link">Sign in</a>.</div>
</div>