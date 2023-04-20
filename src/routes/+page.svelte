<script>
    export let form;
    /** @type {import('./$types').PageData} */
    export let data;
</script>
<div class="logo">
	<a href="/">
	<img src="logo.png" alt="logo" width="65" height="65"></a>
</div>
<div class="slogun">
	Sign in to 5KA
</div>
 {#if form?.invalidMessage}
<div class="message">
	 {form.invalidMessage}
</div>
 {/if} {#if !data?.sessionId}
<div class="login">
	<form method="POST" action="?/login">
		<div class="text">
			Id
		</div>
		<input name="id" type="text" id="id" class="account">
		<div class="text">
			Password
		</div>
		<input name="password" type="password" id="password" class="account">
		<button id="login" class="account">Sign in</button>
	</form>
</div>
<div class="minibox">
	<div class="container2">
		New to 5KA? <a href="/signup" class="link">Create an account</a>.
	</div>
</div>
 {:else}
<div class="minibox">
	<div class="container2">
		login completed
	</div>
</div>
{/if}