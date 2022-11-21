<h2 class="title">Log in</h2>
<hr>
<br />
<form action="models/login.php" method="post">
    <!-- Courriel -->
    <div class="field">
        <label class="label">Email</label>
        <p class="control has-icons-left has-icons-right">
            <input class="input" type="email" placeholder="Email" name="loginEmail" required>
            <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
            </span>
        </p>
    </div>
    <!-- Mot de passe -->
    <div class="field">
        <label class="label">Password</label>
        <p class="control has-icons-left">
            <input class="input" type="password" placeholder="Password" name="loginPassword" required>
            <span class="icon is-small is-left">
                <i class="fas fa-lock"></i>
            </span>
        </p>
    </div>
    <br />
    <br />
    <!-- Bouton de connexion -->
    <div class="field">
        <div class="control has-text-centered">
            <input type="submit" class="button" value="Log in">
        </div>
    </div>
</form>
<br />
<!-- Lien vers l'inscription -->
<p>Still not a member ?
    <a onclick="openModal('modalRegister')">Register here</a>
</p>
<div id="modalRegister" class="modal is-vcentered"></div>
<script>
    loadView('modalRegister');
</script>