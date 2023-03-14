<script>
    export let form;

    /** @type {import('./$types').PageData} */
    export let data;
</script>

<!-- <form method="POST" action="?/signup"><button>Sign up</button></form>
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
{/if} -->

<!-- <style>
    body {
        background-color: #0C0E12;
        overflow-y: scroll;
    }
    html {
        overflow-y: scroll;
    }
</style> -->
<div class="main3"><a href="/" ><img src="logo.png" alt="logo" width="65" height="65"></a></div>

<div class="main4">Sign in to KS5</div>


<div class="main">
    <!-- <h1 class="logo">Acidgram</h1> -->
    <div class="container">
        <div class="container2">Id</div>
        <input type="text" id="id" class="account">
        <div class="container2">Password</div>
        <input type="password" id="password" class="account">
        <button id="login" class="account">Sign in</button>
    </div>
</div>   
<div class="main2">
    <div class="container2">New to KS5? <a href="/signup" class="link">Create an account</a>.</div>
</div>

<style>
.main {
    width: 310px;
    margin: auto;
    margin-top: 10px;
    height: 220px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    /* border: 1px solid lightgrey; */
    border-radius: 10px;
    background-color: #121519;
    border: 1px solid #191D21;
}

/* .logo {
    margin-top: 0px;
    margin-bottom: 40px;
} */

#login {
    width: 100%;
    background-color: #1F7629;
    border-color: transparent;
    color: white;
    margin-top: 15px;
}

.account {
    width: 275px;
    height: 29px;
    display: block;
    margin-bottom: 2px;
    /* padding: 6px; */
    border: 1px solid #24292E;
    border-radius: 7px;
    background-color: #0C0E12;
    color: white;
}

.container2 {
    padding: 6px;
}

.main2 {
    width: 310px;
    margin: auto;
    margin-top: 12px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    /* border: 1px solid lightgrey; */
    border-radius: 10px;
    background-color: #0C0E12;
    border: 1px solid #24292E;
}

.main3 {
    width: 170px;
    margin: auto;
    margin-top: 35px;
    height: 70px;
    font-size: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    /* border: 1px solid lightgrey; */
    border-radius: 10px;
    background-color: #0B0C0F;
}

.main4 {
    width: 170px;
    margin: auto;
    margin-top: 3px;
    height: 70px;
    font-size: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    /* border: 1px solid lightgrey; */
    border-radius: 10px;
    background-color: #0B0C0F;
}

.link {
    color: #407CDC;
    text-decoration-line: none;
}
.link:hover {
    text-decoration: underline;
}

/* #alert {
    border-color: transparent;
} */
</style>