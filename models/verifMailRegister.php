<?php
// Renvoie true si le mail est déjà utilisé et false s'il n'est pas utilisé
session_start();

require_once 'connect.php';

$sql = 'SELECT  email
        FROM    user
        WHERE   email = :email';

$req = $conn->prepare($sql);
$req->execute(array('email' => $_GET['email']));
$ligne = $req->fetch(PDO::FETCH_ASSOC);

if($ligne) {
    echo false;
}
else {
    echo true;
}

?>