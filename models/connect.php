<?php

    $server_name = 'localhost';
    $db_name = 'hackathon';
    $db_username = 'root';
    $db_password = '';
    
    try
    {
        $conn = new PDO("mysql:host=$server_name;dbname=$db_name", $db_username, $db_password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    }
    
    catch(PDOException $e)
    {
        echo "Erreur : " . $e->getMessage();
    }

?>