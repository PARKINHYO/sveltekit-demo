<h1>New Project</h1>

<form method="POST" action="?/new">
    <label>
        Name: 
        <input name="name" type="text" required minlength="5" maxlength="20">
    </label><br>
    <label>
        Description: <br>
        <textarea name="description" cols="70" rows="30" required minlength="5" maxlength="200"></textarea>
    </label><br>
    <button>Create new project</button>
</form>