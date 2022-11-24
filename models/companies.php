<?php 

    require_once('connect.php');
    
    $sql = "SELECT  id,
                    nom
            FROM    compagnies_aeriennes";

    $exe = $conn->query($sql);
    $ligne = $exe->fetchAll();

    foreach($ligne as $row){
        echo $row['id'];
    }

?>