<?php

require_once 'connect.php';

echo $_POST['registerEmail'];
echo $_POST['registerPassword'];
echo $_POST['registerUsername'];

$password = password_hash($_POST['registerPassword'], PASSWORD_DEFAULT);

$req = $conn->prepare("INSERT INTO user VALUES (null ,:username , :email, :password)");
$req->bindParam(':username', $_POST['registerUsername']);
$req->bindParam(':password', $password);
$req->bindParam(':email', $_POST['registerEmail']);

// insertion d'une ligne
$req->execute();

?>

<script>
    window.location.href="../index.php?event=register_success";
</script>