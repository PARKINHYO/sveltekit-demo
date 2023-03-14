<script>
    export let form;

    /** @type {import('./$types').PageData} */
    export let data;
</script>

<div class="main3"><a href="/" ><img src="logo.png" alt="logo" width="65" height="65"></a></div>
<div class="main4">Sign in to KS5</div>

{#if form?.invalidMessage}
<div class="main5">
    {form.invalidMessage}
</div>
{/if}

{#if !data?.sessionid}
<div class="main">
    <!-- <h1 class="logo">Acidgram</h1> -->
    <form method="POST" action="?/login" class="container">
        <div class="container2">Id</div>
        <input name="id" type="text" id="id" class="account">
        <div class="container2">Password</div>
        <input name="password" type="password" id="password" class="account">
        <button id="login" class="account">Sign in</button>
    </form>
</div> 
<div class="main2">
    <div class="container2">New to KS5? <a href="/signup" class="link">Create an account</a>.</div>
</div>
<div class="main2">
    <div class="container2">ID: kminchelle, PW: 0lelplR (demo account)</div>
</div>
{:else}
<div class="main2">
    <div class="container2">login completed</div>
</div>
{/if}

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

#login:hover {
    filter: brightness(150%);
}

#login:active {
    filter: brightness(70%);
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

.container3 {
    color: red;
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

.main5 {
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
    background-color: #251417;
    border: 1px solid #6C2224;
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