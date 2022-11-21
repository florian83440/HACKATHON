<?php

session_start();

require_once 'connect.php';

$email = $_POST['loginEmail'];
$password = $_POST['loginPassword'];

$sql = 'SELECT  password, 
                id, 
                username
        FROM    user
        WHERE   courriel = :email';

$req = $conn->prepare($sql);
$req->execute(array('email' => $email));
$ligne = $req->fetch();

if (password_verify($password, $ligne['password'])) {
    $_SESSION['username'] = $ligne['username'];
    $_SESSION['userId'] = $ligne['id'];
?>
<script>
    window.location.href="../index.php";
</script>
<?php
    
} else {
    header('location: ../index.php?event=wrong_login');
}

?>