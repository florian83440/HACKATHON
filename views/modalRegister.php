<div class="modal-background"></div>

<div class="modal-content">
    <div class="box">
        <form action="models/register.php" method="post">
            <!-- Courriel -->
            <div class="field">
                <label class="label">Email <span id="errorEmail"></span></label>

                <p class="control has-icons-left has-icons-right">
                    <input class="input" type="email" id="registerEmail" name="registerEmail" required
                        onkeyup="validateRegister();">
                    <span class="icon is-small is-left">
                        <i class="fas fa-envelope"></i>
                    </span>
                </p>
            </div>
            <!-- Nom d'utilisateur -->
            <div class="field">
                <label class="label">Username</label>
                <p class="control has-icons-left has-icons-right">
                    <input class="input" type="text" name="registerUsername" required minlength="3">
                    <span class="icon is-small is-left">
                        <i class="fas fa-user"></i>
                    </span>
                </p>
            </div>
            <!-- Mot de passe -->
            <div class="field">
                <label class="label">Password*</label>
                <p class="control has-icons-left">
                    <input class="input" type="password" id="registerPassword" name="registerPassword" required
                        oninput="validateRegister();">
                    <span class="icon is-small is-left">
                        <i class="fas fa-lock"></i>
                    </span>
                </p>
                <br>
                <progress id="passwordProgress" class="progress" value="0" max="100"></progress>
                <p>
                    *Must contain : 1 uppercase, 1 lowercase, 1 number, 1 special character and at least
                    12 characters.
                </p>
            </div>
            <br />
            <br />
            <!-- Bouton d'inscription -->
            <div class="field">
                <div class="control has-text-centered">
                    <input id="registerButton" type="submit" class="button" value="Register" disabled="true">
                </div>
            </div>
        </form>
    </div>
</div>

<button class="modal-close is-large" aria-label="close" onclick="closeModal('modalRegister')"></button>